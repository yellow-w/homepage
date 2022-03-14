const express = require('express')
const router = express.Router()
const userController = require('./userController')
const { Auth2 } = require('../../middlewares/auth')

router.get('/signup',userController.signUp)
router.get('/signin',userController.signIn)
router.get('/profile',Auth2, userController.profile)

module.exports = router