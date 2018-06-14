const express = require('express')
const router = express.Router
const boardgameInstance = require('../models/Boardgame-instance')

router.get('boardgame-instance/:id', boardgameInstance.show)
router.get('boardgame-instance/new', boardgameInstance.new)
router.post('boardgame-instance/new', boardgameInstance.create)

module.exports = router