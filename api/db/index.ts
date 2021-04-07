
import {PoolClient} from 'pg'
import accounts from './accounts'
import ingridients from './ingridients'
import recipes from './recipes'

export default function (conn: PoolClient) {
  return {
    accounts: accounts(conn),
    recipes: recipes(conn),
    ingridients: ingridients(conn)
  }


}
