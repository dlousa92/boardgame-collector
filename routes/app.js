const express = require('express')
const router = express.Router()
const user = require('../controllers/user.js')

router.get('/', function (req, res) {
  res.redirect('/login')
})

router.get('/login', function (req, res) {
  res.render('user/login', {title: 'Express', message: req.flash('signupMessage')})
})

module.exports = router
