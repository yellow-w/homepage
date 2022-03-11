exports.SQL = {
    idCheck : 'SELECT user_id FROM users WHERE user_id=?',
    signUp : 'INSERT INTO users (user_id,user_pw,user_name,user_nickname,user_gender,user_dob,user_mobile,user_email) VALUES (?,?,?,?,?,?,?,?)',
    signIn : 'SELECT user_id,user_nickname,user_level FROM users WHERE user_id=? AND user_pw=?'
}
