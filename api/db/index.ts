import { PoolClient } from 'pg'
import accounts from './accounts'

export default function (conn: PoolClient) {
    return {
        accounts: accounts(conn)
    }
}