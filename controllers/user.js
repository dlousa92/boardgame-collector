const User = require('../models/User')
const Boardgame = require('../models/Boardgame')

module.exports = {
  show: (req, res) => {
    res.send('collection goes here')
  },
  login: (req, res) => {
    res.send('hello')
  },
  createLogin: (req, res) => {

  },
  signUp: (req, res) => {
    res.send('welcome fren')
  },
  createSignUp: (req, res) => {

  },
  logout: (req, res) => {
    res.send('goodbye')
  }
}
