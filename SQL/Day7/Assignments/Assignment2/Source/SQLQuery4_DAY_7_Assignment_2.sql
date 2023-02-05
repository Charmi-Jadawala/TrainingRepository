-- use an existing database
USE SqlModuleDB;


-- Select 4th Highest salary from employee table using ranking function 
WITH RankEmployees(EmployeeId, FullName, Salary, Rank)
AS (
SELECT Employee_ID, First_Name + ' ' + Last_Name AS FullName, Salary, RANK() OVER(ORDER BY Salary DESC) AS Rank
FROM Employee)

SELECT EmployeeId, FullName, Salary
FROM RankEmployees 
WHERE Rank = 4;


-- show all records
SELECT * 
FROM Employee;

SELECT * 
FROM Employees;

SELECT * 
FROM departments;