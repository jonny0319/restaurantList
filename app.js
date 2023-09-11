// Include express from server
const express = require('express')
const app = express()

// Define port useage
const port = 3000

app.get('/', (req, res) => {
  res.send('Testing my node server')
})

app.listen(port, () => {
  console.log(`Node servering is listening on https://localhost:${port}`)
})