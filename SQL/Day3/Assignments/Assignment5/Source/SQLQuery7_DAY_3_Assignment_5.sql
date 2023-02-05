-- use an existing Database
USE SqlModuleDB;


-- extract the last 4 character of PhoneNumber.
SELECT EmployeeID, FirstName, LastName, PhoneNumber, RIGHT(PhoneNumber, 4) AS Last4
FROM Employees;


-- show all records of Employees
SELECT *
FROM Employees;
