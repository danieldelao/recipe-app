import { Pool } from 'pg'
import accounts, { AccountController } from './accounts'

export interface Controller {
    accounts: AccountController
}

export default function (pool: Pool) {
    return {
        accounts: accounts(pool)
    }
}