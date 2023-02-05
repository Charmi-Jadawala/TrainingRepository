-- use an existing Database
USE SqlModuleDB;


-- Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table
SELECT Employee.First_Name + ' ' + Employee.Last_Name AS Full_Name, Employee.Joining_Date, Incentives.Incentive_Date, 
DATEDIFF(DAY, Employee.Joining_Date, Incentives.Incentive_Date) AS [DateDiff]
FROM Employee
INNER JOIN Incentives ON Employee.Employee_ID = Incentives.Employee_Ref_ID;


-- show all records of Employee
SELECT * 
FROM Employee;

-- show all records of Incentives
SELECT * 
FROM Incentives;

