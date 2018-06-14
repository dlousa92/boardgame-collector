const express = require('express')
const router = express.Router()
const boardgame = require('../controllers/boardgame')

router.get('/:id', boardgame.show) // will show user individual boardgame
router.get('/new', boardgame.new) // will add a new boardgame into your collection
router.post('/new', boardgame.create)
router.get('/:id/edit', boardgame.edit) // will allow you to update the total plays and rating of a boardgame
router.put('/:id', boardgame.update)
router.delete('/:id', boardgame.delete) // will allow you to delete the boardgame out of your collection

module.exports = router