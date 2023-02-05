-- use an existing Database
USE SqlModuleDB;


-- Select 4th Highest salary from employee table using ranking function 
SELECT * 
FROM (SELECT *, RANK() OVER (ORDER BY Salary DESC) [Rank by Salary]
FROM Employees) 
AS tmp WHERE [Rank by Salary] = 4;


-- show all records of Employees
SELECT *
FROM Employees;

