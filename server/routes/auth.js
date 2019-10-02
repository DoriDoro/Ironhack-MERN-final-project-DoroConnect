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
        // console.log(vinDoc._id)
        const salt = bcrypt.genSaltSync(bcryptSalt)
        const hashPass = bcrypt.hashSync(password, salt)
        User.create({
          email: req.body.email,
          password: hashPass,
          VIN_ids: vinDoc._id,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
        })
          .populate('VIN_ids')
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
      })
      .catch(err => next(err))
  })
})

router.post('/login', (req, res, next) => {
  const { email, password } = req.body

  User.findOne({ email })
    .populate('VIN_ids')
    .then(userDoc => {
      // "userDoc" will be empty if the email is wrong (no document in database)
      if (!userDoc) {
        next(new Error('Incorrect login details'))
        return
      }

      if (!bcrypt.compareSync(password, userDoc.password)) {
        next(new Error('Incorrect login details'))
        return
      }

      req.logIn(userDoc, () => {
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

router.post('/edit-profile', (req, res, next) => {
  const { firstName, lastName, email, phone, address } = req.body

  User.findOneAndUpdate(
    { email }, // find by email
    { firstName, lastName, phone, address }, // which parts are to update
    { new: true } // mentatory
  )
    .populate('VIN_ids')
    .then(editProfile => {
      res.send(editProfile)
    })
    .catch(err => next(err))
})

router.post('/edit-vehicle', (req, res, next) => {
  // console.log(req.body) chaeck the name of VIN in the req.body
  const { vin } = req.body

  VINModel.findOne({ VIN: vin })
    .then(vinDoc => {
      // console.log(vinDoc)
      if (vinDoc === null) {
        res
          .status(409)
          .json({ message: 'The VIN does not exist in the database' })
        return
      }
      const id = req.user._id
      User.findByIdAndUpdate(id, { VIN_ids: [vinDoc._id] }, { new: true })
        .populate('VIN_ids')
        .then(updateVIN => {
          res.send(updateVIN)
        })
    })
    .catch(err => next(err))
})

router.post('/add-vehicle', (req, res, next) => {
  // console.log(req.body) { vin: 'SJNFAAZE0U6054202' }
  const { vin } = req.body

  VINModel.findOne({ VIN: vin })
    .then(vinDoc => {
      if (vinDoc === null) {
        res
          .status(409)
          .json({ message: 'The VIN does not exists in the database' })
        return
      }

      User.findByIdAndUpdate(
        req.user._id,
        { $push: { VIN_ids: [vinDoc._id] } },
        { new: true }
      )
        .populate('VIN_ids')
        .then(addVin => {
          res.send(addVin)
        })
    })
    .catch(err => next(err))
})

module.exports = router
