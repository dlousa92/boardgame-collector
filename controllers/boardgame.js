const Boardgame = require('../models/Boardgame')
const BoardgameInstance = require('../models/Boardgame-instance')

module.exports = {
  show: (req, res) => {
    res.render('boardgame/show', {title: 'express'})
  },
  new: (req, res) => {
    res.render('boardgame/new', {title: 'new'})
  },
  create: (req, res) => {
    Boardgame.findOne({})
      .then(boardgame => {
        req.user.library.push(boardgame)
        req.user.save(err => {
          res.redirect('user/library')
          err()
        })
      })
  },
  edit: (req, res) => {

  },
  update: (req, res) => {

  },
  delete: (req, res) => {

  }
}
