-- use an existing database
USE SqlModuleDB;


-- Write a View to display the department name, manager name, and city
CREATE VIEW [Manager View] AS
SELECT D.Department_Name,
COALESCE((SELECT E.FirstName + ' ' + E.LastName FROM Employees E WHERE D.Manager_Id = E.EmployeeID), 'N/A') AS [Manager Name],
L.City
FROM departments D
JOIN locations L
ON D.Location_Id = L.Location_Id;

SELECT * 
FROM [Manager View];


-- Create a View to display department name, name (first_name, last_name), hire date, salary of the manager for all managers whose experience is more than 15 years
CREATE VIEW [Salary View] AS
SELECT D.Department_Name, 
COALESCE(E.FirstName + ' ' + E.LastName, 'N/A') AS Name,
E.HireDate,
COALESCE((SELECT E.Salary FROM Employees E WHERE E.EmployeeID = D.Manager_Id), 0) AS Salary
FROM departments D
LEFT JOIN Employees E ON D.Manager_Id = E.EmployeeID
JOIN job_history J ON E.EmployeeID = J.Employee_Id 
WHERE DATEDIFF(YEAR, J.Start_Date, J.End_Date) > 15;

SELECT * 
FROM [Salary View];


-- show all records
SELECT * 
FROM Employees;

SELECT * 
FROM departments;

SELECT * 
FROM jobs;

SELECT * 
FROM job_history;

SELECT * 
FROM locations;
