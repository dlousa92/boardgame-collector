const mongoose = require('../db/connection')
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema

const boardgameInstance = new Schema({
  boardgame: {
    type: Schema.ObjectId,
    ref: 'Boardgame'
  },
  played: {
    type: String,
    enum: ['Finished, Did not finish']
  }
})

module.exports = mongoose.model('boardgameInstance', boardgameInstance)
