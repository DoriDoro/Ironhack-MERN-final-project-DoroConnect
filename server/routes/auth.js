const express = require('express')
const passport = require('passport')
const router = express.Router()
const User = require('../models/User')
const VINModel = require('../models/VIN')

// Bcrypt to encrypt passwords
const bcrypt = require('bcrypt')
const bcryptSalt = 10

router.post('/signup', (req, res, next) => {
  const { VIN, email, password, firstName, lastName } = req.body
  if (!VIN) {
    res.status(400).json({ message: 'Please enter your VIN' })
    return
  }
  if (!email || !password) {
    res.status(400).json({ message: 'Indicate email and password' })
    return
  }

  VINModel.findOne({ VIN }).then(vinDoc => {
    if (vinDoc === null) {
      res
        .status(409)
        .json({ message: 'The VIN does not exist in the database' })
      return
    }

    User.findOne({ email })
      .then(userDoc => {
        if (userDoc !== null) {
          res.status(409).json({ message: 'The email address already exists' })
          return
        }
        console.log(vinDoc._id)
        const salt = bcrypt.genSaltSync(bcryptSalt)
        const hashPass = bcrypt.hashSync(password, salt)
        User.create({
          email: req.body.email,
          password: hashPass,
          VIN_ids: vinDoc._id, // User.update({ $push: {VIN_ids: value}})
          firstName: req.body.firstName,
          lastName: req.body.lastName,
        })
          .then(user => console.log(user))
          .catch(err => next(err))

        // const newUser = new User({
        //   vinDoc._id,
        //   email,
        //   password: hashPass,
        //   firstName,
        //   lastName,
        // })
        // return newUser.save()
      })
      .then(userSaved => {
        // LOG IN THIS USER
        // "req.logIn()" is a Passport method that calls "serializeUser()"
        // (that saves the USER ID in the session)
        req.logIn(userSaved, () => {
          // hide "encryptedPassword" before sending the JSON (it's a security risk)
          userSaved.password = undefined
          res.json(userSaved)
        })
      })
      .catch(err => next(err))
    return res.send('oki so far')
  }) // update the found VIN inside of the database
})

router.post('/login', (req, res, next) => {
  const { email, password } = req.body

  // first check to see if there's a document with that email
  User.findOne({ email })
    .then(userDoc => {
      // "userDoc" will be empty if the email is wrong (no document in database)
      if (!userDoc) {
        // create an error object to send to our error handler with "next()"
        next(new Error('Incorrect login details'))
        return
      }

      // second check the password
      // "compareSync()" will return false if the "password" is wrong
      if (!bcrypt.compareSync(password, userDoc.password)) {
        // create an error object to send to our error handler with "next()"
        next(new Error('Incorrect login details'))
        return
      }

      // LOG IN THIS USER
      // "req.logIn()" is a Passport method that calls "serializeUser()"
      // (that saves the USER ID in the session)
      req.logIn(userDoc, () => {
        // hide "encryptedPassword" before sending the JSON (it's a security risk)
        userDoc.password = undefined
        res.json(userDoc)
      })
    })
    .catch(err => next(err))
})

router.post('/login-with-passport-local-strategy', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({ message: 'Something went wrong' })
      return
    }

    if (!theUser) {
      res.status(401).json(failureDetails)
      return
    }

    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: 'Something went wrong' })
        return
      }

      // We are now logged in (notice req.user)
      res.json(req.user)
    })
  })(req, res, next)
})

router.get('/logout', (req, res) => {
  req.logout()
  res.json({ message: 'You are out!' })
})

module.exports = router
