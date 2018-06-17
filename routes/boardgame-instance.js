const express = require('express')
const router = express.Router()
const boardgameInstance = require('../controllers/boardgame-instance')

router.get('/:id', boardgameInstance.show)
router.get('/new', boardgameInstance.new)
router.post('/', boardgameInstance.create)

module.exports = router
