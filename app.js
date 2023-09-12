// Include express from server
const express = require('express')
const app = express()

// Define port useage
const port = 3000

// Add external JSON file / restaurant data
const restaurantList = require('./restaurant.json')

// Include template engine handlebars
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Add static files
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { restaurant: restaurantList.results })
})

app.get('/search', (req, res) => {
  // use keyword obtained from query string to filter restaurants to provide search results
  const keyword = req.query.keyword.trim().toLowerCase()
  const restaurants = restaurantList.results.filter(restaurant => restaurant.name.toLowerCase().includes(keyword))
  res.render('index', { restaurant: restaurants })
})

app.get('/restaurants/:id', (req, res) => {
  // const restaurant = restaurantList.results.find(restaurant => { return req.params.id == restaurant.id })
  const restaurant = restaurantList.results.find(restaurant => req.params.id === restaurant.id.toString())
  res.render('show', { restaurant: restaurant })
})


app.listen(port, () => {
  console.log(`Node servering is listening on https://localhost:${port}`)
})