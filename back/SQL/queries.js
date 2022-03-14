exports.SQL = {
    idCheck: 'SELECT user_id FROM users WHERE user_id=?',
    signUp: 'INSERT INTO users (user_id,user_pw,user_name,user_nickname,user_gender,user_dob,user_mobile,user_email) VALUES (?,?,?,?,?,?,?,?)',
    signIn: 'SELECT user_id,user_nickname,user_level FROM users WHERE user_id=? AND user_pw=?',
    profile: 'SELECT DATE_FORMAT(user_dob AND user_dos,"%Y-%m-%d") AS user_dob AND user_dos FROM users WHERE user_id=?',

    boardWrite: 'INSERT INTO board (user_nickname,board_subject, board_content) VALUES (?,?,?)',
    boardView: 'SELECT board_subject, user_nickname, DATE_FORMAT(board_date,"%Y-%m-%d %p %h:%i") AS board_date, board_hit, board_content FROM board WHERE board_idx = ?',
    boardList: 'SELECT board_idx, board_subject, user_nickname, DATE_FORMAT(board_date,"%Y-%m-%d") AS board_date, board_hit, board_content FROM board ORDER BY board_idx DESC',
    boardTotalRecords: 'SELECT COUNT(board_idx) AS totalRecords FROM board',
    boardUpdate: 'UPDATE board SET board_subject = ?, board_content = ? WHERE board_idx = ?',
    boardDelete: 'DELETE from board WHERE board_idx =?'
}
