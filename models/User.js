const mongoose = require('../db/connection')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

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

User.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

module.exports = mongoose.model('User', User)
