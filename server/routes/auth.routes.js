const { Router } = require('express')
const { login, signup } = require('../controllers/auth.controller')

const router = Router()
const upload = require('../middleware/upload')
const sharp = require('../middleware/converter')

router.post('/user/login', login)
router.post('/user/signup', upload.single('image'), signup)

module.exports = router
