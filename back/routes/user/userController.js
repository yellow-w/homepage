const pool = require('../../db').pool
const {SQL}= require('../../SQL/queries')
const {createToken} = require('../../utils/jwt')
const salt = process.env.SALT

exports.idCheck = async (req, res) => {
        const prepare = [req.body.userid]
    try {
        const [result] = await pool.execute(SQL.idCheck, prepare)
        if (result[0] != undefined) throw new Error('에러')
        const response = {
            result: req.body.userid,
            errno: 1
        };
        res.json(response)
    } catch (e) {
        console.log('아이디가 중복입니다.', e.message)
        const response = {
            result: [],
            errno: 0
        };
        res.json(response)
    }
}

exports.signUp = async (req, res) => {
    const { userid, userpw, name, nickname, dob, gender, mobile, email } = req.body
    const prepare = [userid, userpw, name, nickname, gender, dob, mobile, email]
    try {
        await pool.execute(SQL.signUp, prepare)
        const response = {
            errno: 1
        }
        res.json(response)
    } catch (e) {
        console.log('에러발생', e.message)
        const response = {
            errno: 0
        };
        res.json(response)
    }
}

exports.signIn = async (req,res) => {
    const { userid, userpw } = req.body
    const prepare = [ userid, userpw ]
    try{
        const [result] = await pool.execute(SQL.signIn,prepare)
        if(result[0] == undefined) throw new Error('회원정보 확인 불가')
        //jwt 토큰 생성할 것
        const token = createToken({...result[0],salt})
        console.log(token)
        const response = {
            result: {
                ...result[0]
            },
            errno: 1
        };
        res.json(response)

    } catch(e){
        console.log(e.message, '로그인 정보가 일치하지 않습니다.')
        const response = {
            result: [],
            errno: 0
        };
        res.json(response)
    }
}

