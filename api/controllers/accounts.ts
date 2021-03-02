import { PoolClient } from 'pg'
import express from 'express'

export default function (conn: PoolClient) {
  return {
    async createAccount (req: express.Request, res: express.Response) {
      res.status(201)
      res.send()
    },
    async updateAccount (req: express.Request, res: express.Response) {
      res.status(200)
      res.send()
    },
    async deleteAccount (req: express.Request, res: express.Response) {
      res.status(201)
      res.send()
    },
    async readAccount (req: express.Request, res: express.Response) {
      res.status(200)
      res.send()
    }
  }
}
