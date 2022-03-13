const { SQL } = require('../../SQL/queries')
const { pool } = require('../../db')

exports.list = async (req, res) => {
    let response = {
        result: [],
        errno: 1
    }
    try {
        const [result] = await pool.execute(SQL.boardList)
        response = {
            result,
            errno: 0
        }
    } catch (e) {
        console.log(e.message)
    }
    res.send(response)
}

exports.write = async (req, res) => {
    const { subject, content } = req.body
    const nickname = req.user.user_nickname
    const prepare = [nickname, subject, content]
    let response = {
        result: [],
        errno: 1
    }
    try {
        const [result] = await pool.execute(SQL.boardWrite, prepare)
        console.log(result)
        const response = {
            result: {
                affectedRows: result.affectedRows,
                insertId: result.insertId
            },
            errno: 0
        }
    } catch (e) {
        console.log(e.message, '글쓰기 실패')
    }
    res.send(response)
}

exports.view = async (req, res) => {
    const { board_idx } = req.body
    const prepare = [board_idx]
    let response = {
        result: [],
        errno: 1
    }
    try {
        const [[result]] = await pool.execute(SQL.boardView, prepare)
        response = {
            ...{ response },
            result,
            errno: 0
        }
        console.log(response)
    } catch (e) {
        console.log(e.message)
    }
    res.send(response)
}

exports.update = async (req, res) => {
    const { subject, content, board_idx } = req.body
    const prepare = [subject, content, board_idx]
    let response = {
        result: [],
        errno: 1
    }
    try {
        const [result] = await pool.execute(SQL.boardUpdate, prepare)
        response = {
            result: {
                affectedRows: result.affectedRows,
                insertId: result.insertId
            },
            errono: 0
        }
        console.log(response)
    } catch (e) {
        console.log(e.message)
    }
    res.send(response)
}

exports.delete = async (req, res) => {
    const { board_idx } = req.body
    const prepare = [board_idx]
    let response = {
        errno: 1
    }
    try {
        const [result] = await pool.execute(SQL.boardDelete, prepare)
        const response = {
            result,
            errno: 0
        }
        console.log(result)
    } catch (e) {
        console.log(e.message)
    }
    res.send(response)
}