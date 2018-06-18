const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Boardgame = new Schema({
  info: {
    title: String,
    image: String,
    year: String,
    rating: Number
  }
})

module.exports = mongoose.model('Boardgame', Boardgame)
