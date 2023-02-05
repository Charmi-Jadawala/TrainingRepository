-- use an existing database
USE SqlModuleDB;


-- Write a query to rank employees based on their salary for a month
WITH RankEmployees(EmployeeId, FullName, Salary, Rank)
AS (
SELECT Employee_ID, First_Name + ' ' + Last_Name AS FullName, Salary, RANK() OVER(ORDER BY Salary DESC) AS Rank
FROM Employee)

SELECT * 
FROM RankEmployees ORDER BY FullName;


-- show all records
SELECT * 
FROM Employee;

SELECT * 
FROM Employees;

SELECT * 
FROM departments;