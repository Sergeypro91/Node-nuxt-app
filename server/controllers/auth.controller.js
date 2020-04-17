const fs = require('fs')
const sharp = require('sharp')
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

    if (req.file) {
      fs.unlink(req.file.path, (err) => {
        if (err) throw err
        console.log('User image was deleted')
      })
    }
  } else {
    const isMailReg = await User.findOne({ email: req.body.email })

    if (isMailReg) {
      res.status(409).json({ message: 'User with that email exists' })

      if (req.file) {
        fs.unlink(req.file.path, (err) => {
          if (err) throw err
          console.log('User image was deleted')
        })
      }
    } else {
      const salt = bcrypt.genSaltSync(10)
      let user = null

      if (req.file) {
        user = new User({
          userName: req.body.userName,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, salt),
          imageUrl: `/${req.file.filename}`
        })
      } else {
        user = new User({
          userName: req.body.userName,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, salt)
        })
      }

      try {
        await user.save()
        res.status(201).json(user)

        if (req.file) {
          const imageReduce = async (size) => {
            await sharp(req.file.path)
              .resize(size, size)
              .toFile(
                `./static/img/users/thumbJPG_${size}/${req.file.filename}`
              )
          }

          const imageWebP = async (size) => {
            await sharp(req.file.path)
              .resize(size, size)
              .webp({ quality: 80 })
              .toFile(
                `./static/img/users/thumbWebP_${size}/${req.file.filename
                  .replace('.jpg', '.webp')
                  .replace('.png', '.webp')}`
              )
          }

          imageReduce(256)
          imageReduce(100)
          imageReduce(50)
          imageWebP(256)
          imageWebP(100)
          imageWebP(50)
        }
      } catch (e) {
        res.status(500).json(e)
      }
    }
  }
}
