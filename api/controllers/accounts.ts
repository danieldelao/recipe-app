import { PoolClient } from 'pg'
import express from 'express'
import dbFactory from '../db'

export default function (conn: PoolClient) {
  return {
    async createAccount (req: express.Request, res: express.Response) {
      let name = req.body.username
      let password = req.body.password
      const connection = dbFactory(conn)
      await connection.accounts.createAccount(name, password)
      res.status(201)
      res.send()
    },

    // async authenticateAccount (req: express.Request, res: express.Response) {
    //   let name = req.body.username
    //   let password = req.body.password
    //   const connection = dbFactory(conn)
    //   const result = await connection.accounts.findAccount(name)
    //   res.status(200)
    //   res.send()
    // },

    async deleteAccount (req: express.Request, res: express.Response) {
      let name = req.enforcer!.params.username
      const connection = dbFactory(conn)
      await connection.accounts.deleteAccount(name)
      res.status(201)
      res.send()
    },

    async findAccount (req: express.Request, res: express.Response) {
      let name = req.enforcer!.params.username
      const connection = dbFactory(conn)
      const results = await connection.accounts.findAccount(name)
      res.status(200)
      res.send(results.rows[0])
    },
    async updateAccount (req: express.Request, res: express.Response) {
      let name = req.enforcer!.params.username
      let password = req.body.password
      const connection = dbFactory(conn)
      await connection.accounts.updateAccount(name, password)
      res.status(204)
      res.send()
    }
  }
}
