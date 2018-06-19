const User = require('../models/User')
const Boardgame = require('../models/Boardgame')

module.exports = {
  show: (req, res) => {
    User.findOne({ _id: req.params.id })
      .populate({
        path: 'library'
      })
      .then(user => {
        res.render('user/library', {})
      })
      // user/5b27d657fe8f803744da9d7a for testing purposes
  },
  login: (req, res) => {
  },
  createLogin: (req, res) => {
  },
  signUp: (req, res) => {
    res.send('welcome fren')
  },
  createSignUp: (req, res) => {

  },
  logout: (req, res) => {
    req.logout()
    res.redirect('/')
  },
  update: (req, res) => {
  }
}
