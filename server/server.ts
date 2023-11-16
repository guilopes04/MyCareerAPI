import cors from 'cors'
import express from 'express'
import router from './routes'

const app = express()
const port = 8080

app.use(cors(), express.json())

app.use('/', router)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
