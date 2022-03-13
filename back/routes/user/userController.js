const { pool } = require('../../db')
const { SQL } = require('../../SQL/queries')
const { createToken } = require('../../utils/jwt')
const salt = process.env.SALT


exports.idCheck = async (req, res) => {
    const prepare = [req.body.userid]
    let response = {
        result: [],
        errno: 1
    };

    try {
        const [result] = await pool.execute(SQL.idCheck, prepare)
        if (result[0] !== undefined) throw new Error('아이디 중복 에러')
        response = {
            result: req.body.userid,
            errno: 0
        };
    } catch (e) {
        console.log(e.message)
    }
    res.json(response)
}

exports.signUp = async (req, res) => {
    const { userid, userpw, name, nickname, dob, gender, mobile, email } = req.body
    const prepare = [userid, userpw, name, nickname, gender, dob, mobile, email]
    let response = {
        errno: 1
    };
    try {
        const result = await pool.execute(SQL.signUp, prepare)
        response = {
            result:{
                row:result.affectedRows,
                id:result.insertId
            },
            errno: 0
        }
    } catch (e) {
        console.log('에러발생', e.message)
    }
    res.json(response)
}


exports.signIn = async (req, res) => {
    const { userid, userpw } = req.body
    const prepare = [userid, userpw]
    let response = {
        result: [],
        errno: 1
    };
    try {
        const [result] = await pool.execute(SQL.signIn, prepare)
        if (result[0] === undefined) throw new Error('회원정보 확인 불가')

        const jwt = createToken(result[0])
        response = {
            result: {
                ...result[0]
            },
            errno: 0
        };
        res.cookie('token',jwt,{
            path:'/',
            httpOnly:true,
            domain:'localhost'
        })
        // res.setHeader('Set-Cookie',`token=${jwt}; httpOnly; secure; path=/; domain=localhost;`);
    } catch (e) {
        console.log(e.message, '로그인 정보가 일치하지 않습니다.')
    }
    res.json(response)
}

