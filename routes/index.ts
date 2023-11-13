import express, { Request, Response } from 'express'
import homeTemplate from './templates/home-template'
import onboardingTemplate from './templates/onboarding-template'
import careerResume from './mocks/career-resume'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.send(homeTemplate)
})

router.get('/myCredentials', (req: Request, res: Response) => {
  res.send(onboardingTemplate)
  //chamada do get historico de senhas
})

router.post('/password', (req: Request, res: Response) => {
  console.log(req)
  //chamada da criacao da senha + ambiente associado
})

router.post('/generatePassword', (req: Request, res: Response) => {
  console.log(req)
  // chamada metodo para gerar senha
  res.send(careerResume)
})

router.put('/password', (req: Request, res: Response) => {
  console.log(req)
  //chamada da criacao da senha + ambiente associado
})

export default router
