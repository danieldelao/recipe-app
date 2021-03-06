import { PoolClient } from 'pg'
import express from 'express'
import { Controller } from '../db'

export default function (db: Controller) {
  return {
    async createAccount (req: express.Request, res: express.Response) {
      const result = await db.accounts.createAccount(req.body.username, req.body.password)
      // db.accounts.createAccount("claire", "manwaring")
      //check for if it added a row
      console.log(result.rowCount)
      res.status(201)
      res.send()
    },
    async updateAccount (req: express.Request, res: express.Response) {
      const result = await db.accounts.updateAccount(req.body.username, req.body.password)
      res.status(200)
      res.send()
    },
    async deleteAccount (req: express.Request, res: express.Response) {
      const result = await db.accounts.deleteAccount(req.body.username, req.body.password)
      res.status(201)
      res.send()
    },
    async readAccount (req: express.Request, res: express.Response) {
      res.status(200)
      res.send()
    }
  }
}
