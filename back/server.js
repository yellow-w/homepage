require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./routes')
const port = process.env.PORT
const {createToken} = require('./utills/jwt')


const config = {
    'origin' : 'http://localhost:3001',
    'credential' : true,
}

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors(config))
app.use(router)

app.listen(port,()=>{
    console.log(`back server running on localhost ${port}`)
})