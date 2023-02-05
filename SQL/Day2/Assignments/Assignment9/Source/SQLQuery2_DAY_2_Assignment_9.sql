-- use an existing Database
USE AdventureWorks2019;


-- increase the minimum and maximum salary of PU_CLERK by 2000 as well as the salary for those employees by 20% and commission by 10% 
UPDATE Jobs
SET MinSalary = MinSalary + 2000, MaxSalary = MaxSalary + 2000
WHERE JobId = 'PU_CLERK';

UPDATE Employees
SET Salary = Salary + (Salary * 0.20), CommissionPct = CommissionPct + (CommissionPct * 0.10)
WHERE Job_Id = 'PU_CLERK';


-- show all records of Employees, Jobs, Departments
SELECT * 
FROM Employees;

SELECT * 
FROM Jobs;

SELECT * 
FROM Departments;