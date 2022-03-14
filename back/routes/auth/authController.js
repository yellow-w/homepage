exports.Auth = (req,res) =>{
    const {token} = req.body
    if(token){
        res.send('1')
    } else {
        res.send('0')
    }
}