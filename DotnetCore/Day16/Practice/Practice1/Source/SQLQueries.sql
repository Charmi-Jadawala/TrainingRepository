CREATE TABLE Log(
	RequestId int IDENTITY(1, 1) PRIMARY KEY,
	RequestType varchar(30) NOT NULL,
	RequestTime datetime DEFAULT GETDATE()
);

SELECT *
FROM Log;

