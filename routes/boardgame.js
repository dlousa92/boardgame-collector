const express = require('express')
const router = express.Router()
const boardgame = require('../controllers/boardgame')

router.get('/new', boardgame.new) // will add a new boardgame into your collection
router.get('/:id', boardgame.show) // will show user individual boardgame
router.post('/search/', boardgame.search) // will allow you to update the total plays and rating of a boardgame
router.put('/:id', boardgame.update)
router.delete('/:id', boardgame.delete) // will allow you to delete the boardgame out of your collection

module.exports = router
