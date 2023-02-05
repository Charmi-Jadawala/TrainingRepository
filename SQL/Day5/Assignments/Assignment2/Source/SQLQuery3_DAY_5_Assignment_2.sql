-- use an existing Database
USE SqlModuleDB;


-- Select first_name, incentive amount from employee and incentives table who have incentives and incentive amount greater than 3000
SELECT Employee.First_Name, Incentives.Incentive_Amount
FROM Employee
RIGHT JOIN Incentives ON Employee.Employee_ID = Incentives.Employee_Ref_ID
WHERE Incentives.Incentive_Amount > 3000;


-- show all records of Employee
SELECT * 
FROM Employee;

-- show all records of Incentives
SELECT * 
FROM Incentives;

