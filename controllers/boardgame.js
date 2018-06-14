const Boardgame = require('../models/Boardgame')
const BoardgameInstance = require('../models/Boardgame-instance')

module.exports = {
  show: (req, res) => {
    res.render('boardgame/show', {title: 'express'})
  },
  new: (req, res) => {

  },
  create: (req, res) => {

  },
  edit: (req, res) => {

  },
  update: (req, res) => {

  },
  delete: (req, res) => {

  }
}
