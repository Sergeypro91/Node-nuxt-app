const sharp = require('sharp')

const file = (req, res) => {
  sharp(req.file.path).resize(500)
}

module.exports = sharp(file)
