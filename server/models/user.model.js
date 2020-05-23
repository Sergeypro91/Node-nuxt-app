const { model, Schema } = require('mongoose')

const userSchema = new Schema({
  userName: {
    type: String,
    minLength: 6,
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
  },
  notes: {
    type: Array,
    default: []
  }
})

module.exports = model('users', userSchema)
