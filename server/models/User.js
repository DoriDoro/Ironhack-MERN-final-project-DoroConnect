const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    VIN_ids: [
      {
        type: Schema.Types.ObjectId,
        ref: 'VIN',
        minLength: 1,
      },
    ],

    firstName: String,
    lastName: String,
    address: String,
    phone: Number,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
)

const User = mongoose.model('User', UserSchema)
module.exports = User
