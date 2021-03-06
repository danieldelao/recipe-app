import bcrypt from 'bcrypt'
import { Pool, QueryResult } from 'pg'
import { v4 as uuidv4 } from 'uuid'

export interface AccountController {
    createAccount(username: string, password: string): Promise<QueryResult>
    updateAccount(username: string, password: string): Promise<QueryResult>
    deleteAccount(username: string, password: string): Promise<QueryResult>
}

export default function (pool: Pool): AccountController {
    return{
        async createAccount (username: string, password: string) {
            return pool.query({
                text:'INSERT INTO accounts (id, username, password) VALUES ($1, $2, $3)',
                values: [
                    uuidv4(), 
                    username, 
                    await bcrypt.hash(password, 10)
                ]
            })
        },
        async updateAccount (username: string, password: string) {
            // return pool.query({
            //     text:'UPDATE accounts (id, username, password) VALUES ($1, $2, $3)',
            //     values: [
            //         uuidv4(), 
            //         username, 
            //         await bcrypt.hash(password, 10)
            //     ]
            // })
        },
        async deleteAccount (username: string, password: string) {
            // return pool.query({
            //     text:'DROP USER IF EXISTS accounts (username) VALUES ($1)',
            //     values: [
            //         username
            //     ]
            // })
        },
        // async readAccount (username: string, password: string) {
        //     conn.query({
        //         text:'SELECT CURRENT_USER'
        //     })
        // }
    }
}