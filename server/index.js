const express = require('express')
const app = express()
const port = 3000

app.post('/', (req, res, next) => {
  console.log('middleware1 is executed', req.headers.name);
  res.send({ name: req.headers.name })
  next()
})

app.get('/greet', (req, res, next) => {
  res.sendStatus(404)
  next()
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))