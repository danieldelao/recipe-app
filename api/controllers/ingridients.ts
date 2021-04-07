import { PoolClient } from 'pg'
import express from 'express'
import dbFactory from '../db'

export default function (conn: PoolClient) {
  return {
    
    async getAll (req: express.Request, res: express.Response) {
        let recipeId = req.enforcer.params.recipeId
        const connection = dbFactory(conn)
        const result = await connection.ingridients.getAll(recipeId)
        res.status(200)
        res.send(result.rows[0])
      },

    async getIngridients (req: express.Request, res: express.Response) {
      let recipeId = req.enforcer.params.recipeId
      let id = req.enforcer.params.ingridientId
      const connection = dbFactory(conn)
      const result = await connection.ingridients.getIngridients(recipeId, id)
      res.status(200)
      res.send(result.rows[0])
    },

    async addIngridients (req: express.Request, res: express.Response) {
      let recipeId = req.enforcer.params.recipeId
      let name = req.body.name
      let season = req.body.season
      let rating = req.body.rating
      const connection = dbFactory(conn)
      await connection.ingridients.addIngridients(recipeId ,name, season, rating)
      res.status(201)
      res.send('Success adding a recipe')
    },

    async deleteIngridients (req: express.Request, res: express.Response) {
      let recipeId = req.enforcer.params.recipeId
      let id = req.enforcer.params.ingridientId
      const connection = dbFactory(conn)
      await connection.ingridients.deleteIngridients(recipeId, id)
      res.status(200)
      res.send("Success deleting")
    },
    async updateIngridients (req: express.Request, res: express.Response) {
      let id = req.enforcer.params.ingridientId
      let recipeId = req.enforcer.params.recipeId
      let name = req.body.name
      let season = req.body.season
      let rating = req.body.rating
      const connection = dbFactory(conn)
      await connection.ingridients.updateIngridients(id, recipeId, name, season, rating)
      res.status(204)
      res.send("Success updating")
    }
  }
}