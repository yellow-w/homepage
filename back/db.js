require('dotenv').config()
const mysql = require('mysql2')

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}

const pool = mysql.createPool(config)
const promisePool = pool.promise()
exports.pool = promisePool