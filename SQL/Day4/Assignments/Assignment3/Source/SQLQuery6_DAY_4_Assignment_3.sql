-- use an existing Database
USE SqlModuleDB;


-- Get department, total salary with respect to a department from employee table
SELECT DepartmentID, SUM(Salary) AS [Total Salary]
FROM Employees
GROUP BY DepartmentID;


-- show all records of Employees
SELECT *
FROM Employees;


