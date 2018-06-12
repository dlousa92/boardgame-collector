const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const boardgameInstance = new Schema({
  boardgame: {
    type: Schema.ObjectId,
    ref: 'Boardgame'
  },
  play: {
    type: String,
    enum: ['Finished, Did not finish']
  },
  rate: ['thumbsUp, thumbsDown']
})

module.exports = mongoose.model('boardgameInstance', boardgameInstance)
