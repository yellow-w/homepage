const express = require('express')
const router = express.Router()
const boardController = require('./boardController')

router.get('/list', boardController.list)
router.get('/write', boardController.write)
router.get('/view/:idx', boardController.view)
router.get('/write/:idx', boardController.update)


module.exports = router
