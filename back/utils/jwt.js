const crypto = require('crypto')

function createToken (state,salt){
    const header = {
        typ:'JWT',
        alg:'HS256'
    }

    const payload = {
        ...state
    }

    const encodedHeader = encoding(header)
    const encodedPayload = encoding(payload)

    function encoding(param){
        Buffer.from(JSON.stringify(param)).toString('base64').replace(/[=]/g,'')
    }

    const signature = createSignature(encodedHeader,encodedPayload,salt)
    return jwt = `${encodedHeader}.${encodedPayload}.${signature}`
}


function createSignature(header,payload,salt){
    crypto.createHmac('sha256',Buffer.from(salt))
    .update(header,payload)
    .digest('base64')
    .replace(/[=]/g,'')
}


module.exports = {
    createToken,
    createSignature
}