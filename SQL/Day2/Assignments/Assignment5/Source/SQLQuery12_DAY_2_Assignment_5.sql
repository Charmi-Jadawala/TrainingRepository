-- use an existing Database
USE AdventureWorks2019;

INSERT INTO Employees
VALUES (5, 'Bob', 'Smith', 'not available', '9945863217', '2020-04-05', 16, 50000, 0.1, 1, 1); 

-- change the Email column of employees table with ‘not available’ for those employees who belongs to the ‘HR’ department.
UPDATE Employees
SET Email = 'not available'
WHERE Department_Id = 7;


-- show all records of Employees, Jobs, Departments
SELECT * 
FROM Employees;

SELECT * 
FROM Jobs;

SELECT * 
FROM Departments;