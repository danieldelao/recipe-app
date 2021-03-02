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
        },
        async updateAccount (username: string, password: string) {
            conn.query({
                text:'UPDATE accounts (username, password) VALUES ($1, $2, $3)',
                values: [
                    uuidv4(), 
                    username, 
                    await bcrypt.hash(password, 10)
                ]
            })
        },
        async deleteAccount (username: string, password: string) {
            conn.query({
                text:'DROP USER IF EXISTS accounts (username) VALUES ($1)',
                values: [
                    username
                ]
            })
        },
        async readAccount (username: string, password: string) {
            conn.query({
                text:'SELECT CURRENT_USER'
            })
        }
    }
}