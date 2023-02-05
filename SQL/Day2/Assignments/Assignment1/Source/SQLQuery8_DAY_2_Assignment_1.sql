-- use an existing Database
USE AdventureWorks2019;


-- set the Email column value to 'not available'
ALTER TABLE Employees
DROP CONSTRAINT CHK_Email;

UPDATE Employees
SET Email = 'not available';


-- show all records of Employees
SELECT * 
FROM Employees;