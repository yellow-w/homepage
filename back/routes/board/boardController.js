const { SQL } = require('../../SQL/queries')
const { pool } = require('../../db')

exports.list = async (req, res) => {
    let response = {
        result: [],
        errno: 1
    }
    try {
        const [result] = await pool.execute(SQL.boardList)
        const [[{totalRecords}]] = await pool.execute(SQL.boardTotalRecords)
        response = {
            ...response,
            totalRecords,
            errno: 0,
            result
        }
    } catch (e) {
        console.log(e.message, 'list 미들웨어 에러')
    }
    res.json(response)
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
        const response = {
            result: {
                affectedRows: result.affectedRows,
                insertId: result.insertId
            },
            errno: 0
        }
    } catch (e) {
        console.log(e.message, 'write 미들웨어 에러')
    }
    res.json(response)
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
    } catch (e) {
        console.log(e.message)
    }
    res.json(response)
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
    } catch (e) {
        console.log(e.message, 'update 미들웨어 에러')
    }
    res.json(response)
}

exports.delete = async (req, res) => {
    const { board_idx } = req.body
    const prepare = [board_idx]
    let response = {
        errno: 1
    }
    try {
        let [result] = await pool.execute(SQL.boardDelete, prepare)
        delete result.user_pw
        result = {...result}
        const response = {
            result,
            errno: 0
        }
    } catch (e) {
        console.log(e.message,'delete 미들웨어 에러')
    }
    res.json(response)
}