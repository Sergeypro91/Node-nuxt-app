const { Router } = require('express')
const { login, signup } = require('../controllers/auth.controller')
const router = Router()

router.post('/user/login', login)
router.post('/user/signup', signup)

module.exports = router
