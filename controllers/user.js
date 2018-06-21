const User = require('../models/User')
const Boardgame = require('../models/Boardgame')
const passport = require('passport')

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
    const loginProperty = passport.authenticate('local-login', {
      successRedirect: '/user/profile',
      failureRedirect: '/login'
    })

    return loginProperty(req, res)
  },
  signUp: (req, res) => {
  },
  createSignUp: (req, res) => {
    const signupStrategy = passport.authenticate('local-signup', {
      successRedirect: '/user/profile',
      failureRedirect: '/login',
      failureFlash: true
    })
    return signupStrategy(req, res)
  },
  logout: (req, res) => {
    req.logout()
    res.redirect('/')
  },
  update: (req, res) => {
    console.log(req.body)
    
    req.user.library.push(req.body.gameId)
    // you're saving the game after updating the user!
    req.user.save(err => {
      // the user is req.user, not just user!
      res.redirect(`/user/${req.user.id}`)
    })
  },
  profile: (req, res) => {
    res.redirect(`/user/${req.user.id}`)
  }
}
