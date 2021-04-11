import { PoolClient } from 'pg'
import express from 'express'
import dbFactory from '../db'

export default function (conn: PoolClient) {
  return {
    
    async getAll (req: express.Request, res: express.Response) {
        const connection = dbFactory(conn)
        let results = await connection.recipes.getAll()
        res.status(200)
        res.send(results.rows[0])
      },

    async getRecipe (req: express.Request, res: express.Response) {
      let recipeId = req.enforcer.params.recipeId
      const connection = dbFactory(conn)
      await connection.recipes.getRecipe(recipeId)
      res.status(200)
      res.send('Success')
    },

    async addRecipe (req: express.Request, res: express.Response) {
      let name = req.body.name
      let season = req.body.season
      let rating = req.body.rating
      let preptime = req.body.preptime
      let ingridients = req.body.ingridients
      let steps = req.body.steps
      const connection = dbFactory(conn)
      await connection.recipes.addRecipe(name, season, rating, preptime, ingridients, steps)
      res.status(201)
      res.send('Success adding a recipe')
    },

    async deleteRecipe (req: express.Request, res: express.Response) {
      let recipeId = req.enforcer.params.recipeId
      const connection = dbFactory(conn)
      await connection.recipes.deleteRecipe(recipeId)
      res.status(200)
      res.send("Success deleting")
    },
    async updateRecipe (req: express.Request, res: express.Response) {
      let recipeId = req.enforcer.params.recipeId
      let name = req.body.name
      let season = req.body.season
      let rating = req.body.rating
      let preptime = req.body.preptime
      let ingridients = req.body.ingridients
      const connection = dbFactory(conn)
      await connection.recipes.updateRecipe(recipeId, name, season, rating, preptime, ingridients)
      res.status(204)
      res.send("Success updating")
    }
  }
}