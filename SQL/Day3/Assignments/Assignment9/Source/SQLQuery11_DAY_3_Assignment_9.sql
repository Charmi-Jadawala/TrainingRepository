-- use an existing Database
USE SqlModuleDB;


-- get the FirstName and HireDate where HireDate between ‘1987-06-01’ and ‘1987-07-30’
SELECT FirstName, HireDate
FROM Employees
WHERE HireDate BETWEEN '1987-06-01' AND '1987-07-30';


-- show all records of Employees
SELECT *
FROM Employees;
