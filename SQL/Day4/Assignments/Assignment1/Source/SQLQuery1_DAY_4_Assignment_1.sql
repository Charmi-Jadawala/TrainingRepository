-- use an existing Database
USE SqlModuleDB;


-- Write a query to rank employees based on their salary for a month 
SELECT *, RANK() OVER (ORDER BY Salary DESC) [Rank by Salary]
FROM Employees;


-- show all records of Employees
SELECT *
FROM Employees;
