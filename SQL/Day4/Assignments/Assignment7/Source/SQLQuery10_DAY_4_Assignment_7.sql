-- use an existing Database
USE SqlModuleDB;


-- Select department, total salary with respect to a department where total salary greater than 50000 order by TotalSalary descending
SELECT DepartmentID, SUM(Salary) AS [Total Salary]
FROM Employees
GROUP BY DepartmentID
HAVING SUM(Salary) > 50000
ORDER BY [Total Salary] DESC;


-- show all records of Employees
SELECT *
FROM Employees;



 

