import  {PoolClient}  from 'pg'
import bcrypt from 'bcrypt'
import { v1 as uuid } from 'uuid'

//adding something
export default  function (conn: PoolClient) {
    return{
        async getAll (recepeId: string) {
            return conn.query({
                text: 'SELECT * FROM ingridients WHERE recipe_id = $1',
                values: [
                    recepeId
                ]
            })
        },
        async getIngridients (recepeId: string, id: string) {
            return conn.query({
                text: 'SELECT * FROM ingridients WHERE recipe_id = $1 AND id = $id',
                values: [
                    recepeId,
                    id
                ]

            })
        },
        async addIngridients (recipeId: string , name: string, season:string, quantity:number) {
            return conn.query({
                text: 'INSERT INTO ingridients (id, recipe_id, name, season, quantity) VALUES ($1, $2, $3, $4, $5)',
                values: [
                    uuid(),
                    recipeId,
                    name,
                    season,
                    quantity
                ]

            })
        },
        async deleteIngridients (recepeId: string, id: string) {
            return conn.query({
                text: 'DELETE FROM ingridients WHERE id = $1 AND recipe_id = $2',
                values: [
                    id,
                    recepeId
                ]

            })
        },
        async updateIngridients (recepeId: string, name: string, season:string, quantity:number, id:string) {
            return conn.query({
                text: 'UPDATE ingridients  SET recipe_id = $1,name = $2, season = $3, season = $4, quantity = $4 where id = $5',
                values: [
                    recepeId,
                    name,
                    season,
                    quantity,
                    id
                ]

            })
        }
    }
}
