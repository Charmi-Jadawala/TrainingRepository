CREATE TABLE ExceptionLog
(
	ExceptionId int identity(1, 1) PRIMARY KEY,
	EName varchar(300),
	ErrorMessage varchar(300),
	GeneratedDate datetime DEFAULT GETDATE()
);

CREATE TABLE RequestLog(
	RequestId int IDENTITY(1, 1) PRIMARY KEY,
	RequestType varchar(30) NOT NULL,
	RequestPath nvarchar(max) NOT NULL,
	RequestTime datetime DEFAULT GETDATE()
);


SELECT * FROM ExceptionLog;

SELECT * FROM RequestLog;