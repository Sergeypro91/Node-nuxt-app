const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')
const keys = require('../keys')
const User = require('../models/user.model')

module.exports.login = async (req, res) => {
  const candidate = await User.findOne({ email: req.body.email })

  if (candidate) {
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      candidate.password
    )

    if (isPasswordCorrect) {
      const token = jwt.sign(
        {
          email: candidate.email,
          userId: candidate._id
        },
        keys.JWT,
        { expiresIn: 60 * 60 }
      )

      res.json({ token })
    } else {
      res.status(401).json({ message: 'Password does not correct' })
    }
  } else {
    res.status(404).json({ message: 'User not found' })
  }
}

module.exports.signup = async (req, res) => {
  const candidate = await User.findOne({ userName: req.body.userName })

  if (candidate) {
    res.status(409).json({ message: 'User with that name exists' })
  } else {
    const isMailReg = await User.findOne({ email: req.body.email })

    if (isMailReg) {
      res.status(409).json({ message: 'User with that email exists' })
    } else {
      const salt = bcrypt.genSaltSync(10)
      const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, salt),
        imageUrl: `/${req.file.filename}`
      })

      try {
        await user.save()
        res.status(201).json(user)
      } catch (e) {
        res.status(500).json(e)
      }
    }
  }
}
