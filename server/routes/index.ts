import express, { Request, Response } from 'express'
import myCredentialsTemplate from './templates/home-template'
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

router.post('/password', async (req: Request, res: Response) => {
  Object.assign(req.body, {
    method: 'postCredential'
  })
  const response = await adapterEvent(new MyCredentialsController(), req)
  res.status(response.statusCode).send(response.body)
})

router.post('/generate-password', async (req: Request, res: Response) => {
  Object.assign(req.body, {
    method: 'generatePassword'
  })
  const response = await adapterEvent(new MyCredentialsController(), req)
  res.status(response.statusCode).send(response.body)
})

router.put('/password', async (req: Request, res: Response) => {
  Object.assign(req.body, {
    method: 'putCredential'
  })
  const response = await adapterEvent(new MyCredentialsController(), req)
  res.status(response.statusCode).send(response.body)
})

router.delete('/password/:_id', async (req: Request, res: Response) => {
  console.log('body delete: ', req)
  Object.assign(req.body, {
    method: 'deleteCredential'
  })
  const response = await adapterEvent(new MyCredentialsController(), req)
  res.status(response.statusCode).send(response.body)
})

export default router
