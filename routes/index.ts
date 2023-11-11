import express, { Request, Response } from 'express'
import homeTemplate from './templates/home-template'
import onboardingTemplate from './templates/onboarding-template'
import careerResume from './mocks/career-resume'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.send(homeTemplate)
})

router.get('/onboarding', (req: Request, res: Response) => {
  res.send(onboardingTemplate)
})

router.post('/onboarding', (req: Request, res: Response) => {
  console.log(req)
  // chamada metodo para salvar infos do onboarding
})

router.get('/career-resume', (req: Request, res: Response) => {
  console.log(req)
  // chamada metodo para regastar careerResume
  res.send(careerResume)
})

export default router
