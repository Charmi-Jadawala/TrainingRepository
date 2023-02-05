-- use an existing Database
USE AdventureWorks2019;


-- change JobId of employee with EmployeeId = 118 to SH_CLERK if the employee belongs to DepartmentId = 30 and the existing job ID does not start with SH
UPDATE Employees
SET Job_Id = 'SH_CLERK'
WHERE Employee_Id = 118 AND Department_Id = 30 AND Job_Id NOT LIKE 'SH%';


-- show all records of Employees, Jobs, Departments
SELECT * 
FROM Employees;

SELECT * 
FROM Jobs;

SELECT * 
FROM Departments;