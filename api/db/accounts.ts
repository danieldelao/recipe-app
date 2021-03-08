import  {PoolClient}  from 'pg'
import bcrypt from 'bcrypt'
import { v1 as uuid } from 'uuid'

//adding something
export default  function (conn: PoolClient) {
    return{
        async createAccount (name: string, password: string ) {
            return conn.query({
                text: 'INSERT INTO accounts (id, username, password) VALUES ($1, $2, $3)',
                values: [
                    uuid(),
                    name,
                    password
                ]

            })
        },
        async deleteAccount (name: string) {
            return conn.query({
                text: 'DELETE FROM accounts WHERE username = $1',
                values: [
                    name
                ]

            })
        },
        async findAccount (name: string ) {
            return conn.query({
                text: 'SELECT * FROM accounts WHERE username = $1',
                values: [
                    name
                ]

            })
        },
        async updateAccount (name: string, password: string ) {
            return conn.query({
                text: 'UPDATE accounts  SET password = $1 where username = $2',
                values: [
                    password,
                    name
                ]

            })
        }
    }
}
