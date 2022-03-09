const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const router = require('./routes')

app.set('view engine','html')
nunjucks.configure('views',{
    express : app
})
app.use(express.static('public'))
app.use(router)

app.listen(3001,()=>{
    console.log('front server running on localhost 3001')
})