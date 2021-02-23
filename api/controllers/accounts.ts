import express from 'express'

export default function () {
  return {
    async createAccount (req: express.Request, res: express.Response) {
      res.status(201)
      res.send()
    },
    async updateAccount (req: express.Request, res: express.Response) {
      res.status(201)
      res.send()
    }
  }
}
