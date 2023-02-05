-- use an existing database
USE SqlModuleDB;

CREATE TRIGGER trgDeleteEmployee
ON Employees
FOR DELETE
AS
BEGIN
	PRINT 'Oops!!! You can''t delete an Employee Record.'
	ROLLBACK TRANSACTION
END

DELETE 
FROM Employees 
WHERE FirstName = 'Steven';

SELECT * 
FROM Employees;