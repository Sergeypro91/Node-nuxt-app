// const passport = require('passport')
const { Router } = require('express')
const user = require('../controllers/user.controller')

const router = Router()

router.get('/getData', user.getUserData)

module.exports = router
