-- use an existing Database
USE AdventureWorks2019;


-- set the Email column value to 'not available' and CommissionPct to 0.10
ALTER TABLE Employees
DROP CONSTRAINT CHK_Email;

ALTER TABLE Employees
ALTER COLUMN CommissionPct float;

UPDATE Employees
SET Email = 'not available', CommissionPct = 0.10;


-- show all records of Employees
SELECT * 
FROM Employees;