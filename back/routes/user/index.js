const express = require('express')
const router = express.Router()
const userController = require('./userController')

router.post('/idcheck',userController.idCheck)
router.post('/signup',userController.signUp)
router.post('/signin',userController.signIn)
router.post('/profile',userController.profile)



module.exports = router