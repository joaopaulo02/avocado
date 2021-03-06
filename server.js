const express = require('express')
const app = express()
const PORT = process.env.PORT || 3333

// serve the css as static
app.use(express.static('home_page'))
app.use(express.static('signin_school'))
app.use(express.static('enter'))
app.use(express.static('budget'))
app.use(express.static('login_admin'))
app.use(express.static('login_user'))
app.use(express.static('school_signed_in'))
app.use(express.static('hp_admin'))
app.use(express.static('choose_year'))
app.use(express.static('ranking_admin'))
app.use(express.static('register_grades'))
app.use(express.static('registered_grades'))
app.use(express.static('signin_student'))
app.use(express.static('student_signed_in'))
app.use(express.static('hp_user'))
app.use(express.static('your_position'))
app.use(express.static('25p_rk'))

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

app.get('/login-admin', (req, res) => {
  res.sendFile(__dirname + '/login_admin/login_admin.html')
})

app.get('/login-user', (req, res) => {
  res.sendFile(__dirname + '/login_user/login_user.html')
})

app.post('/school-signed-in', (req, res) => {
  res.sendFile(__dirname + '/school_signed_in/school_signed_in.html')
})

app.post('/hp-admin', (req, res) => {
  res.sendFile(__dirname + '/hp_admin/hp_admin.html')
})

app.get('/choose-year', (req, res) => {
  res.sendFile(__dirname + '/choose_year/choose_year.html')
})

app.get('/choose-year2', (req, res) => {
  res.sendFile(__dirname + '/choose_year2/choose_year2.html')
})

app.get('/ranking-admin', (req, res) => {
  res.sendFile(__dirname + '/ranking_admin/ranking_admin.html')
})

app.get('/register-grades', (req, res) => {
  res.sendFile(__dirname + '/register_grades/register_grades.html')
})

app.post('/registered-grades', (req, res) => {
  res.sendFile(__dirname + '/registered_grades/registered_grades.html')
})

app.get('/signin-student', (req, res) => {
  res.sendFile(__dirname + '/signin_student/signin_student.html')
})

app.post('/student-signed-in', (req, res) => {
  res.sendFile(__dirname + '/student_signed_in/student_signed_in.html')
})

app.post('/hp-user', (req, res) => {
  res.sendFile(__dirname + '/hp_user/hp_user.html')
})

app.get('/your-position', (req, res) => {
  res.sendFile(__dirname + '/your_position/your_position.html')
})

app.get('/25p-rk', (req, res) => {
  res.sendFile(__dirname + '/25p_rk/25p_rk.html')
})

// PORT
app.listen(PORT, () => console.log(`Server running at ${PORT}`))

