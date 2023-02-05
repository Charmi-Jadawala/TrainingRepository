-- use an existing database
USE SqlModuleDB;


-- Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000
WITH EmployeeIncentives(EmployeeID, IncentiveAmount)
AS ( 
SELECT Employee_Ref_ID AS EmployeeID,
SUM(Incentive_Amount) AS IncentiveAmount
FROM Incentives 
GROUP BY Employee_Ref_ID)

SELECT E.First_Name, I.IncentiveAmount 
FROM Employee E
JOIN EmployeeIncentives I
ON E.Employee_ID = I.EmployeeID
WHERE I.IncentiveAmount > 4000;


-- show all records
SELECT * 
FROM Employee;

SELECT * 
FROM Incentives;


