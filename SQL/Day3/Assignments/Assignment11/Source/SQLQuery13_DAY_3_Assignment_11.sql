-- use an existing Database
USE SqlModuleDB;


-- get the FirstName, LastName who joined in the month of June
SELECT FirstName, LastName
FROM Employees
WHERE MONTH(HireDate) = 6;


-- show all records of Employees
SELECT *
FROM Employees;
