-- use an existing database
USE SqlModuleDB;

ALTER TRIGGER trgDeleteEmployee
ON Employees
FOR DELETE
AS
BEGIN
	SET NOCOUNT ON;

	PRINT 'Records deleted successfully...'
	INSERT INTO EmployeeHistory
	SELECT * FROM deleted;
END

DELETE 
FROM Employees 
WHERE FirstName = 'John';


-- show all records
SELECT * 
FROM Employees;

SELECT * 
FROM EmployeeHistory;