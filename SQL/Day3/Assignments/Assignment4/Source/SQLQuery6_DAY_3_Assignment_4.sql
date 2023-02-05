-- use an existing Database
USE SqlModuleDB;


-- display the length of first name for employees where last name contains character ‘c’ after 2nd position
SELECT EmployeeID, FirstName, LastName, LEN(FirstName) AS Length
FROM Employees
WHERE LastName LIKE '__%c%';


-- show all records of Employees
SELECT *
FROM Employees;
