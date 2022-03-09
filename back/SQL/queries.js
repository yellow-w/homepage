exports.SQL = {
    idCheck : 'SELECT COUNT (userid) AS idcheck FROM users WHERE userid=?',
    signUp : 'INSERT INTO users (userid,userpw,name,nickname,gender,dob,mobile,email) VALUES (?,?,?,?,?,?,?,?)'
}

