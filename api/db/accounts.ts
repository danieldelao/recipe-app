import bcrypt from 'bcrypt'
import { PoolClient } from 'pg'
import { v4 as uuidv4 } from 'uuid'

export default function (conn: PoolClient) {
    return{
        async createAccount (username: string, password: string) {
            conn.query({
                text:'INSERT INTO accounts (username, password) VALUES ($1, $2, $3)',
                values: [
                    uuidv4(), 
                    username, 
                    await bcrypt.hash(password, 10)
                ]
            })
        }
    }
}