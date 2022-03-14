const axios = require('axios')
exports.Auth = async (req, res, next) => {
    try {
        // const {token} = req.headers.cookie // 헤더에 하드코딩으로 쿠키 설정한 경우
        const {token} = req.cookies  //쿠키 파서 사용해서 쿠키 설정한 경우
        const body= {
            token,
        }
        const response = await axios.post('http://localhost:4001/api/auth',body,{
            'Content-Type':'application/json',
            withCredentials : true
        })
        if (response.data === 0) throw new Error('토큰 없음')
        next()
    } catch (e) {
        console.log(e.message)
    }
}

exports.Auth2 = async (req, res, next) => {
    try {
        // const {token} = req.headers.cookie // 헤더에 하드코딩으로 쿠키 설정한 경우
        const {token} = req.cookies  //쿠키 파서 사용해서 쿠키 설정한 경우
        console.log(req.cookies)
        const body= {
            token,
        }
        const response = await axios.post('http://localhost:4001/api/auth',body,{
            'Content-Type':'application/json',
            withCredentials : true
        })
        if (response.data === 0) throw new Error('토큰 없음')
        next()
    } catch (e) {
        console.log(e.message)
    }
}