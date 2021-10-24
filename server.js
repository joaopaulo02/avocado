const express = require('express')
const app = express()
const PORT = process.env.PORT || 3333

// serve the css as static
app.use(express.static('home_page'))

// enable req.body
app.use(express.urlencoded({extended: true}))

// routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home_page/home_page.html')
})

app.get('/signin-school', (req, res) => {
  res.sendFile(__dirname + '/signin_school/signin_school.html')
})

app.get('/enter', (req, res) => {
  res.sendFile(__dirname + '/enter/enter.html')
})

app.get('/budget', (req, res) => {
  res.sendFile(__dirname + '/budget/budget.html')
})

app.listen(PORT, () => console.log(`Server running at ${PORT}`))

