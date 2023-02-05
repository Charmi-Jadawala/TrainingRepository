-- use an existing Database
USE SqlModuleDB;


-- get the distinct Mondays from HireDate in employees tables

-- SELECT CAST(GETDATE() AS Date) AS Today;

SELECT EmployeeID, FirstName, LastName, HireDate 
FROM employees 
WHERE DATENAME(W, HireDate)= 'Monday';


-- show all records of Employees
SELECT *
FROM Employees;
