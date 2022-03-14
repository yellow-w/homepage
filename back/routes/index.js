const express = require('express')
const router = express.Router()
const userRouter = require('../routes/user')
const boardRouter = require('../routes/board')
const authRouter = require('../routes/auth/authController')

router.use('/api/board', boardRouter)
router.use('/api/user',userRouter)
router.use('/api/auth',authRouter.Auth)
router.get('/',(req,res)=>{
    console.log(req.user)
    res.send('hi')
})


module.exports = router