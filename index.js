const express = require('express')
const app = express()

app.set('view engine', 'hbs')

app.use('/', require('./routes/app'))
app.use('/user', require('./routes/user'))
app.use('/boardgame', require('./routes/boardgame'))
// app.use('boardgame-instance', require('./routes/boardgame-instance'))

app.set('port', process.env.PORT || 5000)
app.listen(4000, () => {
  console.log('app listening on port 4000 copy that')
})
