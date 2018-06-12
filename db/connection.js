const mongoose = require('mongoose')

mongoose.connect('mongod://localhost/boardgamecollector')
mongoose.Promise = Promise

// error if database connection does not work
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = mongoose