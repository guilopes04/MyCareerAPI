import express, { Request, Response } from 'express'
import myCredentials from '../mocks/my-credentials-mock'
import myCredentialsTemplate from '../templates/home-template'
import { adapterEvent } from '../../src/adapter/adapter'
import { MyCredentialsController } from '../../src/controller/my-credentials-controller'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.send(myCredentialsTemplate)
})

router.get('/my-credentials', async (req: Request, res: Response) => {
  Object.assign(req.body, {
    method: 'getMyCredentials'
  })
  const response = await adapterEvent(new MyCredentialsController(), req)
  res.status(response.statusCode).send(response.body)
})

router.post('/password', (req: Request, res: Response) => {
  console.log(req)
  //chamada da criacao da senha + ambiente associado
})

router.post('/generate-password', (req: Request, res: Response) => {
  res.send(myCredentials)
})

router.put('/password', (req: Request, res: Response) => {
  console.log(req)
  //chamada da criacao da senha + ambiente associado
})

export default router
