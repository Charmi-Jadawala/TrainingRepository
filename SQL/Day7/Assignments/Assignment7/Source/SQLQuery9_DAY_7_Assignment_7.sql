-- use an existing database
USE SqlModuleDB;


-- Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending
WITH EmployeeDetails(DeptId, DeptName, TotalSalary)
AS (
SELECT D.Department_Id AS DeptId, 
D.Department_Name AS DeptName,
SUM(E.Salary) AS TotalSalary
FROM Employees E
JOIN departments D
ON E.DepartmentID = D.DEPARTMENT_ID
GROUP BY D.DEPARTMENT_ID, D.Department_Name)

SELECT DeptName, TotalSalary 
FROM EmployeeDetails 
WHERE TotalSalary > 50000
ORDER BY TotalSalary DESC;


-- show all records
SELECT * 
FROM Employee;

SELECT * 
FROM Employees;

SELECT * 
FROM departments;