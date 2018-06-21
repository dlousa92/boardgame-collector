const express = require('express')
const hbs = require('hbs')
const flash = require('connect-flash')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const methodOverride = require('method-override')

const app = express()
require('./config/passport')(passport)

hbs.registerPartials(__dirname + "/views/partials")
app.use(express.static(__dirname + '/public'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'hbs')
app.use(methodOverride('_method'))
app.use(
  session({
    secret: 'EXPRESS-IS-AWESOME',
    saveUninitialized: true,
    resave: false
  })
)
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

app.use(function (req, res, next) {
  res.locals.currentUser = req.user
  next()
})
app.use(require('./routes/app.js'))
app.use('/user', require('./routes/user'))
app.use('/boardgame', require('./routes/boardgame'))
app.use('/boardgame-instance', require('./routes/boardgame-instance'))

app.set('port', process.env.PORT || 5000)
app.listen(process.env.PORT || 5000)
// (4000, () => {
//  console.log('app listening on port 4000 copy that')
// })
