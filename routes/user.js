const express = require('express')
const router = express.Router()
const user = require('../controllers/user.js')

router.get('/login', user.login)
router.post('/login', user.createLogin)
router.get('/new', user.signUp)
router.post('/new', user.createSignUp)
router.get('/:id', user.show)
router.get('/logout', user.logout)

module.exports = router
