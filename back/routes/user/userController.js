const pool = require('../../db').pool
const {SQL}= require('../../SQL/queries')


exports.idCheck = async (req,res) => {
    const response = {result : 1}
    try {
        const prepare = [req.body.userid]
        const [[count]] = await pool.execute(SQL.idCheck,prepare)
        if(count.idcheck != 0) throw new ERROW
    } catch (e) {
        console.log('아이디가 중복입니다.', e)
        response.result = 0
    }
    res.json(response)
}

exports.signUp = async (req,res) => {
    try{
        const { userid, userpw, name, nickname, dob, gender, mobile, email } = req.body
        const prepare = [ userid, userpw, name, nickname, gender, dob, mobile, email ]
        await pool.execute(SQL.signUp,prepare)
    } catch (e) {
        console.log(e)
        console.log('에러 발생')
    }
    res.json('perfect from signUp!')
}

exports.signIn = (req,res) => {
}

