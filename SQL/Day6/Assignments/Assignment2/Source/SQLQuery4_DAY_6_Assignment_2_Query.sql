-- use an existing database
USE SqlModuleDB;


-- Create a View to Find the names (first_name, last_name), job, department number, and department name of the employees who work in London 
CREATE VIEW [London View] AS
SELECT E.FirstName + ' ' + E.LastName AS FullName, 
E.JobId, 
(SELECT J.Job_Title FROM Jobs J WHERE E.JobId = J.JOB_ID) JobName,
E.DepartmentID, 
(SELECT D.Department_Name FROM departments D WHERE E.DepartmentID = D.Department_ID) DepartmentName
FROM Employees E
JOIN Departments D ON E.DepartmentID = D.Department_ID
JOIN Locations L ON D.Location_Id = L.Location_ID
WHERE L.City = 'London';

SELECT * 
FROM [London View];


-- Create a View to get the department name and number of employees in the department
CREATE VIEW [Department View] AS
SELECT (SELECT D.DEPARTMENT_NAME FROM departments D WHERE E.DepartmentID = D.DEPARTMENT_ID) AS DepartmentName, 
COUNT(E.DepartmentID) AS [No. of Employees]
FROM Employees E
JOIN departments D
ON E.DepartmentID = D.DEPARTMENT_ID
GROUP BY E.DepartmentID;

SELECT * 
FROM [Department View];


-- Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history
CREATE VIEW [Job History View] AS
SELECT EMPLOYEE_ID, 
(SELECT jobs.JOB_TITLE FROM jobs WHERE jobs.JOB_ID = job_history.JOB_ID) AS JobTitle,
DATEDIFF(Day, START_DATE, END_DATE) AS [No. of Days]
FROM job_history
WHERE DEPARTMENT_ID = 90;

SELECT * 
FROM [Job History View];


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



