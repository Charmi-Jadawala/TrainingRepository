-- use an existing Database
USE SqlModuleDB;


-- Get department wise maximum salary from employee table order by salary ascending
SELECT DepartmentID, MIN(Salary) AS [Total Salary]
FROM Employees
GROUP BY DepartmentID
ORDER BY [Total Salary] ASC;


-- show all records of Employees
SELECT *
FROM Employees;



 
