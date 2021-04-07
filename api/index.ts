import dbFactory from './db'
import dotenv from 'dotenv'
import Enforcer from 'openapi-enforcer'
import EnforcerMiddleware from 'openapi-enforcer-middleware'
import express from 'express'
import path from 'path'
import jwt, { decode } from 'jsonwebtoken'


import { Pool, Client } from 'pg'

dotenv.config()

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: +process.env.DB_PORT!,
})

// pool.query('SELECT NOW()', (err, res) => {
//   if (err) {
//     console.error(err)
//     process.exit(1)
//   } else {
//     console.log('Successfully connected to the database')
//   }
//   console.log(err, res)
//   pool.end()
// })

// Create express instance
const app = express()

// Create a simple logging middleware
app.use(async (req, res, next) => {
  console.log(req.method.toUpperCase() + ' ' + req.path)
  
  // const conn = await pool.connect()
  // req.db = dbfactory(conn)
  // req.body.accounts.createAccount('')

  next()

  
})

const secret = "alkjdhfaksjdhflskjdbflkajsdbflaskjbdflaskjbd"

// Add Body Parser
app.use(express.json())

app.post('/login', async (req, res) => {
  if (!req.headers.authorization) {
    console.log("headers", req.headers)
    return res.json({ error: 'No credentials sent!' });
  } else {
    const auth = req.headers.authorization
    // Get auth 
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [username, password] = Buffer.from(b64auth, 'base64').toString().split(':')

    console.log(username, password)
    
    pool.query('SELECT * FROM "accounts" WHERE username = '+ "'"+ username+"'" +'AND password = '+ "'"+ password+"'" , (err, r) => {
      if (err) {
        console.error(err)
        process.exit(1)
      } else {
        if(r.rowCount == 1) {
          const newToken = jwt.sign({user: username}, secret)
          return res.send(newToken)
        }
        return res.status(400).send({
          message: 'Wrong Credentials'
        });
      }
    })
  }
  
});

// Any paths defined in your openapi.yml will validate and parse the request
// before it calls your route code.
const openapiPath = path.resolve(__dirname, 'openapi.yml')
const enforcerMiddleware = EnforcerMiddleware(Enforcer(openapiPath))
app.use(enforcerMiddleware.init())

// Declare possible user property for express request object
declare global {
  namespace Express {
      interface Request {
          user?: {
            // id: string
            username: string
          }
      }
  }
}

// Verify JWT
app.use(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (req.headers.authorization) {
    const [type, token] = req.headers.authorization.split(/ +/)
    if (type.toLowerCase() === 'bearer') {
      try{
        const decoded:any = await jwt.verify(token, secret)
        req.user = {
          username: decoded.password
        }
        
      } catch (err) {
        return next('bad request')
      }
    }
  }
  next()
})

//Check if we need auth 
app.use((req, res, next) => {
  if (req.enforcer && req.enforcer.operation && req.enforcer.operation.security && !req.user) {
    res.sendStatus(401)
  }else{
    next()
  }
})


// Catch errors
enforcerMiddleware.on('error', (err: Error) => {
  console.error(err)
  // process.exit(1)
}) 

const controllersPath = path.resolve(__dirname, 'controllers')

app.use(enforcerMiddleware.route(controllersPath, [pool]))


// Export express app
module.exports = app


// Why is this last? Is this letting the server listen to the API on the specific port?
// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
