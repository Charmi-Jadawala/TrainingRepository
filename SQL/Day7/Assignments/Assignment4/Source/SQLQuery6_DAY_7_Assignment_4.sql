-- use an existing database
USE SqlModuleDB;


-- Get department, total salary with respect to a department from employee table order by total salary descending 
WITH EmployeeDetails(EmployeeId, FullName, Salary, DeptId, DeptName)
AS (
SELECT E.EmployeeID, E.FirstName + ' ' + E.LastName AS FullName, E.Salary, D.Department_Id AS DeptId, D.Department_Name AS DeptName
FROM Employees E
JOIN departments D
ON E.DepartmentID = D.DEPARTMENT_ID)

SELECT DeptId, DeptName, SUM(Salary) AS TotalSalary
FROM EmployeeDetails 
GROUP BY DeptId, DeptName
ORDER BY TotalSalary;


-- show all records
SELECT * 
FROM Employee;

SELECT * 
FROM Employees;

SELECT * 
FROM departments;