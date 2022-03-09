const express = require('express')
const router = express.Router()
const userRouter = require('../routes/user')


router.use('/api/user',userRouter)

router.get('/',(req,res)=>{
    res.send('hi')
})



module.exports = router