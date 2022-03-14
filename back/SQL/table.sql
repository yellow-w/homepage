use myhome;

CREATE TABLE users (
    user_id VARCHAR(20) NOT NULL,
    user_pw VARCHAR(16) NOT NULL,
    user_name VARCHAR(40) NOT NULL,
    user_nickname VARCHAR(20) NOT NULL,
    user_dob DATE NOT NULL,
    user_gender CHAR(1) NOT NULL,
    user_mobile INT(11) NOT NULL,
    user_email CHAR(50) NULL,
    user_level INT(1) NOT NULL DEFAULT 3,
    user_active BOOLEAN NOT NULL DEFAULT true,
    user_dos TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY (user_id),
    UNIQUE KEY (user_mobile)
) CHARSET = utf8;

CREATE TABLE board (
    board_idx INT AUTO_INCREMENT,
    user_nickname VARCHAR(20) NOT NULL ,
    board_subject VARCHAR(50) NOT NULL,
    board_content TEXT ,
    board_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    board_hit INT DEFAULT 0 NOT NULL,
    PRIMARY KEY(board_idx)
) CHARSET = utf8mb4;


INSERT INTO board (board_subject,user_nickname) SELECT board_subject,user_nickname FROM board;