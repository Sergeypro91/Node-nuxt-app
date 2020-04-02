const { Router } = require('express')
const { login, createUser } = require('../controllers/auth.controller')
const router = Router()

router.post('/user/login', login)
router.post('/user/create', createUser)

module.exports = router
