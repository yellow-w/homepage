const axios = require('axios')
exports.auth = async (req, res, next) => {
    try {
        // const {token} = req.headers.cookie // 헤더에 하드코딩으로 쿠키 설정한 경우
        const {token} = req.cookies  //쿠키 파서 사용해서 쿠키 설정한 경우
        const body= {
            token,
        }
        const response = await axios.post('http://localhost:4001/api/auth',body,{
            'Content-Type':'application/json'
        })
        if (response.data === 0) throw new Error('토큰 없음')
        next()
    } catch (e) {
        console.log(e.message)
        // alert('로그인 후 이용해주세요')
        // location.href="/user/signin"
    }
}