const mongoose = require('mongoose')

mongoose.connect('mongod://localhost/boardgamecollector')

mongoose.Promise = Promise

module.exports = mongoose
