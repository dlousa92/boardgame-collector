const data = require('./seedData.js')
const Boardgame = require('../models/Boardgame')

data.forEach(game => {
  Boardgame.create({
    info: {
      title: game.name,
      image: game.image,
      year: game.yearPublished,
      rating: game.averageRating
    }
  })
})
