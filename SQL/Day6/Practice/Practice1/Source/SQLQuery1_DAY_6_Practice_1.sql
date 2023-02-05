-- use an existing database
USE AdventureWorks2019;


SELECT E.Employee_Id, E.FirstName, E.Department_Id, (SELECT D.DepartmentName FROM Departments D WHERE D.DepartmentID = E.Department_Id)
FROM Employees E
JOIN Departments D
ON E.Department_Id = D.DepartmentID


-- show all records
SELECT * 
FROM Employees;

SELECT * 
FROM Departments;

SELECT * 
FROM Jobs;



