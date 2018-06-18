const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const app = express()

app.use('/', require('./routes/app'))
app.use('/user', require('./routes/user'))
app.use('/boardgame', require('./routes/boardgame'))
app.use('/boardgame-instance', require('./routes/boardgame-instance'))
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'hbs')

app.set('port', process.env.PORT || 5000)
app.listen(process.env.PORT || 5000)
// (4000, () => {
//  console.log('app listening on port 4000 copy that')
// })
