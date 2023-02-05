-- use an existing database
USE SqlModuleDB;


-- Select EmployeeName, ManagerName from the employee table
WITH EmployeeManager(EmployeeID, EmployeeName, ManagerName)
AS ( 
SELECT E.Employee_ID AS EmployeeID,
E.First_Name + ' ' + E.Last_Name AS EmployeeName,
M.First_Name + ' ' + M.Last_Name AS ManagerName
FROM Employee E
LEFT JOIN 
Employee M
ON E.Manager_ID = M.Employee_ID)

SELECT EmployeeName, COALESCE(ManagerName, 'N/A')
FROM EmployeeManager;


-- show all records
SELECT * 
FROM Employee;

SELECT * 
FROM Incentives;


