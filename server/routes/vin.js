const express = require('express')
const VIN = require('../models/VIN')

const router = express.Router()

// Route to get all VINs
router.get('/', (req, res, next) => {
  VIN.find()
    .then(vins => {
      res.json(vins)
    })
    .catch(err => next(err))
})

// Route to add a VIN as the admin
router.post('/', (req, res, next) => {
  let { VIN, proofOfOwnership, ps, color, kWBattery } = req.body
  VIN.create({ VIN, proofOfOwnership, ps, color, kWBattery })
    .then(vin => {
      res.json({
        success: true,
        vin,
      })
    })
    .catch(err => next(err))
})

module.exports = router
