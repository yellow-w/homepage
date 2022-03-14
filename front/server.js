const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const router = require('./routes')
const cookieParser = require('cookie-parser')


app.set('view engine','html')
nunjucks.configure('views',{
    express : app,
    watch : true
})
app.use(express.static('public'))
app.use(cookieParser())
app.use(router)

app.listen(3001,()=>{
    console.log('front server running on localhost 3001')
})
