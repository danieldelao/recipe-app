import dbFactory from './db'
import dotenv from 'dotenv'
import Enforcer from 'openapi-enforcer'
import EnforcerMiddleware from 'openapi-enforcer-middleware'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import LocalStrategy from 'passport-local'
import passport from 'passport'
import session from 'express-session'

import { Pool, Client } from 'pg'

dotenv.config()

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: +process.env.DB_PORT,
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

const user = [
  // This user is added to the array to avoid creating a new user on each restart
  {
      username: 'Claire',
      // This is the SHA256 hash for value of `password`
      password: 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg='
  }
];

// tell passport to use a local strategy and tell it how to validate a username and password
passport.use(new LocalStrategy(function(username: string, password: string, done: boolean) {
  if (username && password === 'pass') return done(null, { username: username });
  return done(null, false);
}));

// tell passport how to turn a user into serialized data that will be stored with the session
passport.serializeUser(function(user, done) {
  done(null, user.username);
});

// tell passport how to go from the serialized data back to the user
passport.deserializeUser(function(id, done) {
  done(null, { username: id });
});

// tell the express app what middleware to use
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: 'secret key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', function (req, res) {
  res.render('home');
});

// home page
app.get('/', function (req, res) {
  if (req.user) return res.send('Hello, ' + req.user.username);
  res.send('Hello, Stranger!');
});

// specify a URL that only authenticated users can hit
app.get('/protected',
  function(req, res) {
      if (!req.user) return res.sendStatus(401);
      res.send('You have access.');
  }
);

// specify the login url
app.put('/auth/login',
  passport.authenticate('local'),
  function(req, res) {
      res.send('You are authenticated, ' + req.user.username);
  });

// log the user out
app.put('/auth/logout', function(req, res) {
  req.logout();
  res.send('You have logged out.');
});

// start the server listening
app.listen(3000, function () {
  console.log('Server listening on port 3000.');
});


// Create a simple logging middleware
app.use(async (req, res, next) => {
  console.log(req.method.toUpperCase() + ' ' + req.path)
  
  // const conn = await pool.connect()
  // req.db = dbfactory(conn)
  // req.body.accounts.createAccount('')

  next()

  
})

// Add Body Parser
app.use(express.json())

// Any paths defined in your openapi.yml will validate and parse the request
// before it calls your route code.
const openapiPath = path.resolve(__dirname, 'openapi.yml')
const enforcerMiddleware = EnforcerMiddleware(Enforcer(openapiPath))
app.use(enforcerMiddleware.init())

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
