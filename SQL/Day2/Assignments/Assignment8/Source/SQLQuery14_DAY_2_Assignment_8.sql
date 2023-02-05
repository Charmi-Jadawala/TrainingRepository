-- use an existing Database
USE AdventureWorks2019;


-- increase the salary of employees under the department 40 by 25% 
UPDATE Employees
SET Salary = Salary + (Salary * 0.25)
WHERE Department_Id = 40;

-- increase the salary of employees under the department 90 by 15% 
UPDATE Employees
SET Salary = Salary + (Salary * 0.15)
WHERE Department_Id = 90;

-- increase the salary of employees under the department 110 by 10% 
UPDATE Employees
SET Salary = Salary + (Salary * 0.10)
WHERE Department_Id = 110;


-- show all records of Employees, Jobs, Departments
SELECT * 
FROM Employees;

SELECT * 
FROM Jobs;

SELECT * 
FROM Departments;