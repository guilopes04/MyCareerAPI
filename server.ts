import cors from 'cors'
import router from './routes'
import express from 'express'

const app = express()
const port = 3000

app.use(cors(), express.json())

app.use('/', router)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
