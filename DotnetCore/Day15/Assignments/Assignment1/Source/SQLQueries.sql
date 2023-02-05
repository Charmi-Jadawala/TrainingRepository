CREATE TABLE LoginCredentials
(
	UserId int identity(1, 1) PRIMARY KEY,
	UserName varchar(60) NOT NULL,
	Password varchar(30) NOT NULL
);

SELECT * 
FROM LoginCredentials;



CREATE TABLE LoginTokens
(
	TokenId int identity(1, 1) PRIMARY KEY,
	Token varchar(300) NOT NULL
);

SELECT * 
FROM LoginTokens;