-- use an existing database
USE SqlModuleDB;


-- Select first_name, incentive amount for all employees even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives.
WITH EmployeeIncentives(EmployeeID, IncentiveAmount)
AS ( 
SELECT Employee_Ref_ID AS EmployeeID,
SUM(Incentive_Amount) AS IncentiveAmount
FROM Incentives 
GROUP BY Employee_Ref_ID)

SELECT E.First_Name, COALESCE(I.IncentiveAmount, 0) AS IncentiveAmount
FROM Employee E
LEFT JOIN EmployeeIncentives I
ON E.Employee_ID = I.EmployeeID;

-- show all records
SELECT * 
FROM Employee;

SELECT * 
FROM Incentives;


