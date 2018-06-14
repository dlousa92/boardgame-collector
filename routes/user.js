const express = require('express')
const router = express.Router()
const user = require('../controllers/user.js')

router.get('/login', user.login) // will log user in
router.post('/login', user.createLogin)
router.get('/new', user.signUp) // will sign user up
router.post('/new', user.createSignUp)
router.get('/:id', user.show) // will show users library of boardgames
router.get('/logout', user.logout) // will log user out

module.exports = router
