const Boardgame = require('../models/Boardgame')
const BoardgameInstance = require('../models/Boardgame-instance')
const User = require('../models/User')

module.exports = {
  show: (req, res) => {

  },
  new: (req, res) => {
    res.render('boardgame/new', {title: 'new'})
  },
  search: (req, res) => {
    console.log(req.body)
    Boardgame.findOne({ 'info.title': req.body.title })
      .then(game => {
        // console.log(game)
        res.render('boardgame/show', { game })
      })
  },
  edit: (req, res) => {

  },
  update: (req, res) => {
  },
  delete: (req, res) => {

  }
}
