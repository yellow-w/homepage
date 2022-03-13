const crypto = require('crypto')
const salt = process.env.SALT

function createToken (state){
    const header = {
        typ:'JWT',
        alg:'HS256'
    }

    const payload = {
        ...state
    }

    const encodedHeader = encoding(header)
    const encodedPayload = encoding(payload)
    const signature = createSignature(encodedHeader,encodedPayload)
    
    return `${encodedHeader}.${encodedPayload}.${signature}`
}


function encoding(param){
    return Buffer.from(JSON.stringify(param))
                .toString('base64')
                .replace(/[=]/g,'')
}

function createSignature(header,payload){
    return crypto.createHmac('sha256',salt)
            .update(header,payload)
            .digest('base64')
            .replace(/[=]/g,'')
}


module.exports = {
    createToken,
    createSignature
}