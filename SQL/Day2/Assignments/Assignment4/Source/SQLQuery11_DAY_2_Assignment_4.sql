-- use an existing Database
USE AdventureWorks2019;

INSERT INTO Employees
VALUES (5, 'Bob', 'Smith', 'not available', '9945863217', '2020-04-05', 16, 50000, 0.1, 1, 1); 

-- set the Email column value to 'not available' for Department_Id = 80 and CommissionPct < 0.20
UPDATE Employees
SET Email = 'not available'
WHERE Department_Id = 80 AND CommissionPct < 0.20;


-- show all records of Employees
SELECT * 
FROM Employees;