const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Boardgame = new Schema({
  info: {
    title: String,
    genre: String,
    designer: String,
    description: String
  },
  totalPlays: Number,
  rating: String
})

module.exports = mongoose.model('Boardgame', Boardgame)
