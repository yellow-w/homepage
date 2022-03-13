const pool = require('../db')
const { createSignature } = require('../utils/jwt')

exports.Auth = async (req, res, next) => {
    const { token } = req.cookies
    try {
        if (token === undefined) throw new Error('토큰 없음');
        const [header, payload, sign] = token.split('.')
        const signature = await createSignature(header, payload)
        if (signature !== sign) throw new Error('토큰 변조됨');
        const user = JSON.parse(Buffer.from(payload, 'base64').toString());
        req.user = {
            ...user
        }
    } catch (e) {
        console.log(e.message)
    }
    next()
}