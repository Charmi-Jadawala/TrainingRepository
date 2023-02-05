CREATE TABLE ExceptionLog
(
	Id int identity(1, 1) PRIMARY KEY,
	HelpLink varchar(300),
	Message varchar(300),
	Date datetime DEFAULT GETDATE()
);

SELECT * FROM ExceptionLog;