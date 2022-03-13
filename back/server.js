require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./routes')
const port = process.env.PORT
const cookieParser = require('cookie-parser')
const { Auth } = require('./middlewares/auth.js')


const config = {
    origin: true,
    credentials: true,
} // http://localhost:3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(cors(config))
app.use(Auth)
app.use(router)

app.listen(port, () => {
    console.log(`back server running on localhost ${port}`)
})