-- use an existing Database
USE SqlModuleDB;


-- get first name of employees who joined in 1987
SELECT FirstName
FROM Employees
WHERE YEAR(HireDate) = 1987;


-- show all records of Employees
SELECT *
FROM Employees;
