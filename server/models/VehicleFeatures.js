const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VehicleFeaturesSchema = new Schema({
  name: String,
  type: String,
  desciption: String,
})

const VehicleFeatures = mongoose.model('VehicleFeatures', VehicleFeaturesSchema)
module.exports = VehicleFeatures
