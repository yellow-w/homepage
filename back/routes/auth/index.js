const express = require('express')
const router = express.Router()
const authController = require('./authController')

router.post('/',authController.auth)

module.exports = router