const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
  local: {
    name: String,
    email: String,
    password: String
  },
  library: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Boardgame'
    }
  ]
})

module.exports = mongoose.model('User', User)
