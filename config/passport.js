// the commented code below is not working

// const LocalStrategy = require('passport-local').Strategy
// const User = require('../models/User')

// module.exports = function (passport) {
//   passport.serializeUser(function (user, callback) {
//     callback(null, user.id)
//   })

//   passport.deserializeUser(function (id, callback) {
//     User.findById(id, function (err, user) {
//       callback(err, user)
//     })
//   })

//   passport.use('local-signup', new LocalStrategy({
//     nameField: 'name',
//     usernameField: 'email',
//     passwordField: 'password',
//     passReqToCallback: true
//   }, function (req, name, email, password, callback) {
//     // Find a user with this e-mail
//     User.findOne({ 'local.email': email }, function (err, user) {
//       if (err) return callback(err)

//       // If there already is a user with this email
//       if (user) {
//         return callback(null, false, req.flash('signupMessage', 'This email is already in use'))
//       } else {
//         // There is no email registered with this email
//         // Create a new user
//         var newUser = new User()
//         newUser.local.name = name
//         newUser.local.email = email
//         newUser.local.password = newUser.encrypt(password)

//         newUser.save(function (err) {
//           if (err) throw err
//           return callback(null, newUser)
//         })
//       }
//     })
//   }))
// }

const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')

module.exports = function (passport) {
  passport.serializeUser(function (user, callback) {
    callback(null, user.id)
  })

  passport.deserializeUser(function (id, callback) {
    User.findById(id, function (err, user) {
      callback(err, user)
    })
  })

  passport.use(
    'local-signup',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
      },
      function (req, email, password, callback) {
        User.findOne({ 'local.email': email })
          .then(user => {
            if (user) {
              return callback(
                null,
                false,
                req.flash('signupMessage', 'This email is already in use, try another')
              )
            } else {
              let newUser = new User()
              newUser.local.email = email
              newUser.local.password = newUser.encrypt(password)

              newUser.save(err => {
                if (err) throw err
                return callback(null, newUser)
              })
            }
          })
          .catch(err => console.log(err))
      }
    )
  )

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function (req, email, password, callback) {
    // Search for a user with this email
    User.findOne({ 'local.email': email }, function (err, user) {
      if (err) {
        return callback(err)
      }

      // If no user is found
      if (!user) {
        return callback(null, false, req.flash('loginMessage', 'No user found.'))
      }
      // If wrong password
      if (!user.validPassword(password)) {
        return callback(null, false, req.flash('loginMessage', 'Wrong password, try again'))
      }

      return callback(null, user)
    })
  }))
}
