-- use an existing Database
USE SqlModuleDB;


-- display the employees with their code, first name, last name and hire date who hired either on seventh day of any month or seventh month in any year
SELECT EmployeeID, FirstName, LastName, HireDate 
FROM Employees
WHERE DAY(HireDate) = 7 OR MONTH(HireDate) = 7;


-- show all records of Employees
SELECT *
FROM Employees;
