-- use an existing Database
USE SqlModuleDB;


-- Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives
SELECT Employee.First_Name, COALESCE(Incentives.Incentive_Amount, 0) AS Incentive_Amount
FROM Employee
LEFT JOIN Incentives ON Employee.Employee_ID = Incentives.Employee_Ref_ID;


-- show all records of Employee
SELECT * 
FROM Employee;

-- show all records of Incentives
SELECT * 
FROM Incentives;

