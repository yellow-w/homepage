const express = require('express')
const router = express.Router()
const userRouter = require('../routes/user')
const boardRouter = require('../routes/board')
const Auth = require('../middlewares/auth').auth

router.use('/board', Auth, boardRouter)
router.use('/user',userRouter)

router.get('/',(req,res)=>{
    res.render('index')
})



module.exports = router