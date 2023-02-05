-- use an existing Database
USE AdventureWorks2019;


-- change salary of employee to 8000 whose ID is 105, if the existing salary is less than 5000
UPDATE Employees
SET Salary = 8000
WHERE Employee_Id = 105 AND Salary < 5000;


-- show all records of Employees, Jobs, Departments
SELECT * 
FROM Employees;

SELECT * 
FROM Jobs;

SELECT * 
FROM Departments;