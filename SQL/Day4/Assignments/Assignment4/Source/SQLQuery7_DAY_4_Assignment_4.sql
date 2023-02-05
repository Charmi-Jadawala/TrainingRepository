-- use an existing Database
USE SqlModuleDB;


-- Get department, total salary with respect to a department from employee table order by total salary descending 
SELECT DepartmentID, SUM(Salary) AS [Total Salary]
FROM Employees
GROUP BY DepartmentID
ORDER BY [Total Salary] DESC;


-- show all records of Employees
SELECT *
FROM Employees;



