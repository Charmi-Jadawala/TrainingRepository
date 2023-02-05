-- use an existing Database
USE AdventureWorks2019;


-- Get all employee details from the Employees table
SELECT * 
FROM Employees;


-- Get FirstName, LastName from Employees table
SELECT FirstName, LastName
FROM Employees;


-- Get FirstName from Employees table using alias name �Employee Name�
SELECT FirstName AS [Employee Name]
FROM Employees;


-- Get employee details from Employees table whose Employee Name is �Steven� 
SELECT *
FROM Employees
WHERE FirstName = 'Steven';


-- Get employee details from Employees table whose Employee Name are �Neena� and �Lex� 
SELECT *
FROM Employees
WHERE FirstName = 'Neena' OR FirstName = 'Lex';


-- Get employee details from Employees table whose Employee name are not �Neena� and �Lex� 
SELECT *
FROM Employees
WHERE NOT FirstName = 'Neena' AND NOT FirstName = 'Lex';


-- Get employee details from Employees table whose Salary between 5000 and 8000 
SELECT *
FROM Employees
WHERE Salary BETWEEN 5000 AND 8000;


-- Write a query to get the names (FirstName, LastName), Salary, PF of all the Employees (PF is calculated as 12% of salary)
SELECT FirstName + ' ' + LastName AS FullName, Salary, Salary + (Salary *0.12) AS PF
FROM Employees;


-- Get employee details from Employees table whose FirstName starts with �N� 
SELECT *
FROM Employees
WHERE FirstName LIKE 'N%';


-- Write a query to get unique department ID from Employees table 
SELECT DISTINCT Department_Id
FROM Employees;


-- Write a query to get all employee details from the employee table order by FirstName, descending. 
SELECT *
FROM Employees
ORDER BY FirstName DESC;


-- Write a query to get the EmployeeID, names (FirstName, LastName), salary in ascending order of salary. 
SELECT Employee_Id, FirstName + ' ' + LastName AS FullName, Salary
FROM Employees
ORDER BY Salary ASC;


-- Select TOP 2 salary from employee table
SELECT TOP 2 Salary
FROM Employees;