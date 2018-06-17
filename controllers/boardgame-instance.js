const BoardgameInstance = require('../models/Boardgame-instance')
const Boardgame = require('../models/Boardgame')

module.exports = {
  show: (req, res) => {
    res.render('boardgame-instance/show', {title: 'express'})
  },
  new: (req, res) => {

  },
  create: (req, res) => {
  }
}
