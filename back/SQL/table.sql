use myhome;

CREATE TABLE users (
    userid VARCHAR(20) NOT NULL,
    userpw VARCHAR(16) NOT NULL,
    name VARCHAR(40) NOT NULL,
    nickname VARCHAR(20) NOT NULL,
    dob DATE NOT NULL,
    gender CHAR(1) NOT NULL,
    mobile INT(11) NOT NULL,
    email CHAR(50) NULL,
    userlevel INT(1) NOT NULL DEFAULT 3,
    active BOOLEAN NOT NULL DEFAULT true,
    dos TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY (userid),
    UNIQUE KEY (mobile)
) ;