import express, { Request, Response } from 'express'
import myCredentials from './mocks/my-credentials-mock'
import myCredentialsTemplate from './templates/home-template'
import { adapterEvent } from '../src/adapter/adapter'
import { MyCredentialsController } from '../src/controller/my-credentials-controller'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.send(myCredentialsTemplate)
})

router.get('/my-credentials', (req: Request, res: Response) => {
  console.log('req: ', req)
  Object.assign(req.body, {
    method: 'getMyCredentials'
  })
  res.send(adapterEvent(new MyCredentialsController(), req))
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
