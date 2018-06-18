const boardgameData = require('./seedBoardgameData.js')
const Boardgame = require('../models/Boardgame')
const User = require('../models/User')
const bcrypt = require('bcrypt-nodejs')

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

User.find({}).remove(() => {
  let john = User.create({
    local: {
      name: 'John',
      email: 'john@sample.com',
      password: createPassword('john')
    }
  })
    .then((user => {
      user.save(err => console.log(err))
    }))
})

boardgameData.forEach(game => {
  Boardgame.create({
    info: {
      title: game.name,
      image: game.image,
      year: game.yearPublished,
      rating: game.averageRating
    }
  })
    .then(games => {
      games.save(err => console.log(err))
    })
})

// process.exit()
