const express = require('express')
const router = express.Router()
const user = require('../controllers/user.js')

router.get('/login', user.login) // will log user in
router.post('/login', user.createLogin)
router.get('/signUp', user.signUp) // will sign user up
router.post('/signUp', user.createSignUp)
router.get('/profile', user.profile)
router.get('/:id', user.show) // will show users library of boardgames
router.get('/logout', user.logout) // will log user out
router.put('/update', user.update)
module.exports = router
