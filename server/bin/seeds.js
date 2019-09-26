const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })

// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const VIN = require('../models/VIN')
require('../configs/database')

// create admin profile
const bcryptSalt = 10

let users = [
  {
    email: 'doro@gmail.com',
    password: bcrypt.hashSync('123456', bcrypt.genSaltSync(bcryptSalt)),
    firstName: 'Dori',
    lastName: 'Doro',
    address: '75012 Paris',
    phone: 06457,
  },
]

User.deleteMany()
  .then(() => {
    return User.create(users)
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created with the following id:`)
    console.log(usersCreated.map(u => u._id))
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })

// create 20 VIN
let VINs = [
  {
    VIN: 'SJNFAAZE0U6054200',
    proofOfOwnership: 48526,
    ps: '109 PS',
    color: 'white',
    kWBattery: '24kW',
  },
  {
    VIN: 'SJNFAAZE0U6054201',
    proofOfOwnership: 52146,
    ps: '109 PS',
    color: 'blue',
    kWBattery: '24kW',
  },
  {
    VIN: 'SJNFAAZE0U6054202',
    proofOfOwnership: 12486,
    ps: '109 PS',
    color: 'red',
    kWBattery: '24kW',
  },
  {
    VIN: 'SJNFAAZE0U6054203',
    proofOfOwnership: 24875,
    ps: '109 PS',
    color: 'yellow',
    kWBattery: '24kW',
  },
  {
    VIN: 'SJNFAAZE0U6054204',
    proofOfOwnership: 74581,
    ps: '109 PS',
    color: 'grey',
    kWBattery: '24kW',
  },
  {
    VIN: 'SJNFAAZE0U6054205',
    proofOfOwnership: 52415,
    ps: '109 PS',
    color: 'black',
    kWBattery: '24kW',
  },
  {
    VIN: 'SJNFAAZE0U6054206',
    proofOfOwnership: 12453,
    ps: '109 PS',
    color: 'green',
    kWBattery: '24kW',
  },
  {
    VIN: 'SJNFAAZE0U6054207',
    proofOfOwnership: 41524,
    ps: '109 PS',
    color: 'beige',
    kWBattery: '24kW',
  },
  {
    VIN: 'SJNFAAZE0U6054208',
    proofOfOwnership: 41526,
    ps: '109 PS',
    color: 'lila',
    kWBattery: '24kW',
  },
  {
    VIN: 'SJNFAAZE0U6054209',
    proofOfOwnership: 12456,
    ps: '109 PS',
    color: 'brown',
    kWBattery: '24kW',
  },
  {
    VIN: 'SJNFAAZE0U6054210',
    proofOfOwnership: 14789,
    ps: '119 PS',
    color: 'grey',
    kWBattery: '30kW',
  },
  {
    VIN: 'SJNFAAZE0U6054211',
    proofOfOwnership: 36987,
    ps: '119 PS',
    color: 'beige',
    kWBattery: '30kW',
  },
  {
    VIN: 'SJNFAAZE0U6054212',
    proofOfOwnership: 25896,
    ps: '119 PS',
    color: 'mind',
    kWBattery: '30kW',
  },
  {
    VIN: 'SJNFAAZE0U6054213',
    proofOfOwnership: 85479,
    ps: '119 PS',
    color: 'red',
    kWBattery: '30kW',
  },
  {
    VIN: 'SJNFAAZE0U6054214',
    proofOfOwnership: 45698,
    ps: '119 PS',
    color: 'silver',
    kWBattery: '30kW',
  },
  {
    VIN: 'SJNFAAZE0U6054215',
    proofOfOwnership: 36952,
    ps: '119 PS',
    color: 'yellow',
    kWBattery: '30kW',
  },
  {
    VIN: 'SJNFAAZE0U6054216',
    proofOfOwnership: 47815,
    ps: '119 PS',
    color: 'lila',
    kWBattery: '30kW',
  },
  {
    VIN: 'SJNFAAZE0U6054217',
    proofOfOwnership: 98654,
    ps: '119 PS',
    color: 'blue',
    kWBattery: '30kW',
  },
  {
    VIN: 'SJNFAAZE0U6054218',
    proofOfOwnership: 47145,
    ps: '119 PS',
    color: 'white',
    kWBattery: '30kW',
  },
  {
    VIN: 'SJNFAAZE0U6054219',
    proofOfOwnership: 98565,
    ps: '119 PS',
    color: 'green',
    kWBattery: '30kW',
  },
  {
    VIN: 'SJNFAAZE0U6054220',
    proofOfOwnership: 32147,
    ps: '119 PS',
    color: 'black',
    kWBattery: '30kW',
  },
]

VIN.deleteMany()
  .then(() => {
    return VIN.create(VINs)
  })
  .then(vinsCreated => {
    console.log(`${vinsCreated.length} VINs created with the following id:`)
    console.log(vinsCreated.map(v => v._id))
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })
