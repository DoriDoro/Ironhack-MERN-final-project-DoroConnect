const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VINSchema = new mongoose.Schema({
  VIN: {
    type: String,
    required: true,
    unique: true,
    validate: [
      val => /^SJNFAAZE0U60542\d{2}$/,
      'the provided reference is not valid',
    ],
  },

  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  proofOfOwnership: Number,
  ps: String,
  color: String,
  kWBattery: String,
})

const VIN = mongoose.model('VIN', VINSchema)

module.exports = VIN

// SJNFAAZE0U60542 00 - 20

//   /^SJNFAAZE0U60542\d{2}$/
//   /^ref\d{6}([A-Z]{1})$/.test(val),
