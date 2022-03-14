const pool = require('../db')
const { createSignature } = require('../utils/jwt')

exports.Auth = (req, res, next) => {
    try {
        console.log(req.cookies)
        const { token } = req.cookies
        console.log('토큰 있음?',token)
        
        if (token===undefined) throw new Error('토큰 없음');
        const [header, payload, sign] = token.split('.')
        const signature = createSignature(header, payload)
        
        if (signature !== sign) throw new Error('토큰 변조됨');
        const user = JSON.parse(Buffer.from(payload, 'base64').toString());
        
        req.user = {
            ...user
        }
        console.log(req.user)
    } catch (e) {
        console.log(e.message,'auth 미들웨어 에러')
    }
    next()
}