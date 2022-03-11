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
) ;