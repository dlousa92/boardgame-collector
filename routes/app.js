const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.js')

router.get('/', function (req, res) {
  res.redirect('/login')
})

router.get('/login', function (req, res) {
  res.render('user/login', {title: "Express"})
})

module.exports = router
