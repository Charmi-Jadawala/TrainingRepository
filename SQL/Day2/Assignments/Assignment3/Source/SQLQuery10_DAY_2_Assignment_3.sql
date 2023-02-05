-- use an existing Database
USE AdventureWorks2019;


-- set the Email column value to 'not available' and 0.10 for Department_Id = 110
UPDATE Employees
SET Email = 'not available', CommissionPct = 0.10
WHERE Department_Id = 110;


-- show all records of Employees
SELECT * 
FROM Employees;