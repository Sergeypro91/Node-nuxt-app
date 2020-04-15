const { model, Schema } = require('mongoose')

const userSchema = new Schema({
  userName: {
    type: String,
    minLength: 6,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  date: {
    type: Date,
    default: Date.now
  },
  imageUrl: {
    type: String,
    default: '/empty-user.png'
  }
})

module.exports = model('users', userSchema)
