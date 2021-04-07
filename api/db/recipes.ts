import  {PoolClient}  from 'pg'
import bcrypt from 'bcrypt'
import { v1 as uuid } from 'uuid'

//adding something
export default  function (conn: PoolClient) {
    return{
        async getAll ( ) {
            return conn.query({
                text: 'SELECT * FROM recipes'
            })
        },
        async getRecipe (recepeId: string ) {
            return conn.query({
                text: 'SELECT * FROM recipes WHERE id = $1',
                values: [
                    recepeId
                ]

            })
        },
        async addRecipe (name: string, season:string, rating:number, preptime:string) {
            return conn.query({
                text: 'INSERT INTO recipes (id, name, season, rating) VALUES ($1, $2, $3, $4)',
                values: [
                    uuid(),
                    name,
                    season,
                    rating,
                    preptime
                ]

            })
        },
        async deleteRecipe (recepeId: string) {
            return conn.query({
                text: 'DELETE FROM recipes WHERE id = $1',
                values: [
                    recepeId
                ]

            })
        },
        async updateRecipe (recepeId: string, name: string, season:string, rating:number, preptime: string) {
            return conn.query({
                text: 'UPDATE recipes  SET name = $2, season = $3, season = $4, rating = $4 where id = $1',
                values: [
                    recepeId,
                    name,
                    season,
                    rating,
                    preptime
                ]

            })
        }
    }
}
