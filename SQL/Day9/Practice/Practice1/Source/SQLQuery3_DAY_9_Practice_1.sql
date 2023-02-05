-- use an existing database
USE SqlModuleDB;
GO


-- batch
SELECT * 
FROM Employees;
SELECT * 
FROM Employees
WHERE JobId = 'SH_CLERK'
AND ManagerID = 122;
GO


-- Declare Variable
DECLARE @age int;

-- Setting values of the variable
SET @age = 21;

-- Print the value of variable
PRINT @age;

-- If-else
IF @age >= 18
	PRINT 'You''re eligible to vote...';
ELSE
	PRINT 'Oops! You''re not eligible to vote...';

-- Case Statement
PRINT CASE
	WHEN @age = 18 THEN 'You''re now 18'
	WHEN @age > 18 THEN 'You''re now eligible to vote...'
	ELSE 'Oops! You''re not eligible to vote...'
END;


