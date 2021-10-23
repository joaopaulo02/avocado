const express = require('express')
const app = express()
const PORT = process.env.PORT || 3333

// serve the css as static
app.use(express.static('home_page'))

// enable req.body
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home_page/home_page.html')
})

app.listen(PORT, () => console.log(`Server running at ${PORT}`))

