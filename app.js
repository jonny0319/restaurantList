// Include express from server
const express = require('express')
const app = express()

// Define port useage
const port = 3000

// Add external JSON file / restaurant data
const restaurant = require('./restaurant.json')

// Include template engine handlebars
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Add static files
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { restaurant: restaurant.results })

})

app.listen(port, () => {
  console.log(`Node servering is listening on https://localhost:${port}`)
})