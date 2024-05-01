import express from 'express'
const app: express.Express = express()
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hi')
})
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
