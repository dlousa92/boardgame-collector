const Boardgame = require('../models/Boardgame')
const BoardgameInstance = require('../models/Boardgame-instance')

module.exports = {
  show: (req, res) => {

  },
  new: (req, res) => {
    res.render('boardgame/new', {title: 'new'})
  },
  search: (req, res) => {
    Boardgame.findOne({ title: req.body.title })
      .then(game => {
        console.log(game)
        res.render('boardgame/show')
      })
  },
  edit: (req, res) => {

  },
  update: (req, res) => {

  },
  delete: (req, res) => {

  }
}
