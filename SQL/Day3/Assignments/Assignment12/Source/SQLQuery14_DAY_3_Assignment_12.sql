-- use an existing Database
USE SqlModuleDB;


-- get first name, hire date and experience of the employees
SELECT FirstName, HireDate, DATEDIFF(year, HireDate, GETDATE()) AS Experience
FROM Employees;


-- show all records of Employees
SELECT *
FROM Employees;
