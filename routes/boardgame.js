const express = require('express')
const router = express.Router()
const boardgameController = require('../controllers/boardgame')

router.get('/new', boardgameController.new)
router.post('/new', boardgameController.create)
router.put('/:id', boardgameController.updateRating)
