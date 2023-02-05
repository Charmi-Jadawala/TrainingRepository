-- use an existing Database
USE SqlModuleDB;


-- Select EmployeeName, ManagerName from the employee table
SELECT First_Name + ' ' + Last_Name AS EmployeeName, Manager_ID 
FROM Employee;


-- show all records of Employee
SELECT * 
FROM Employee;

-- show all records of Incentives
SELECT * 
FROM Incentives;

