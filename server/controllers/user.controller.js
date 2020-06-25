const User = require('../models/user.model')

module.exports.getUserData = async (req, res) => {
  const candidate = await User.findOne({ email: req.body.email })

  if (candidate) {
    res.json({ candidate })
  }
}
