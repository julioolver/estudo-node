import express from 'express'

const app = express()

app.get('/', (request, response) => {
  response.json({
    message: "hello WOrd"
  })
})
app.listen(3333, () => console.log("entrou aqui 2"));