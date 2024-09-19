import express from "express"
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

const port = 4000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })