-- use an existing Database
USE SqlModuleDB;


-- calculate the age in year
SELECT CAST(GETDATE() AS Date) AS Today;

SELECT EmployeeID, FirstName, LastName, HireDate, CAST(GETDATE() AS Date) AS [Today], DATEDIFF(YY, HireDate, GETDATE()) AS Age
FROM Employees;


-- show all records of Employees
SELECT *
FROM Employees;
