const express = require('express')
const app = express()

// app.get('/', (request, response) => {
//   response.send('All systems go')
// })

app.use('/', require('./routes/app'))
app.use('/user', require('./routes/user'))

app.listen(4000, () => {
  console.log('app listening on port 4000 copy that')
})
