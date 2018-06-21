const express = require('express')
const router = express.Router()
const user = require('../controllers/user.js')

router.get('/', function (req, res) {
  res.redirect('/login')
})

router.get('/login', function (req, res) {
  res.render('user/login', {title: 'Express', message: req.flash('signupMessage'), loginMessage: req.flash('loginMessage')})
})

router.use('/user', require('./user'))
router.use('/boardgame', require('./boardgame'))
router.use('/boardgame-instance', require('./boardgame-instance'))


module.exports = router
