const { Router } = require('express')
const { login, signup, findUser } = require('../controllers/auth.controller')
const { vkOauth } = require('../controllers/socialAuth.controller')

const router = Router()
const upload = require('../middleware/upload')

router.post('/user/login', login)
router.post('/user/signup', upload.single('image'), signup)
router.post('/user/findUser', findUser)
router.post('/oauth', vkOauth)

module.exports = router
