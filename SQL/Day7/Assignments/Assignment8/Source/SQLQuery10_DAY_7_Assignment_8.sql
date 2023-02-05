-- use an existing database
USE SqlModuleDB;


-- Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table
WITH DateDifference(EmployeeID, FullName, JoiningDate, IncentiveDate, Difference)
AS ( 
SELECT E.Employee_ID AS EmployeeID,
E.First_Name + ' ' + E.Last_Name AS FullName,
E.Joining_Date AS JoiningDate,
I.Incentive_Date AS IncentiveDate,
DATEDIFF(day, E.Joining_Date, I.Incentive_Date) AS Difference
FROM Employee E
LEFT JOIN Incentives I
ON E.Employee_ID = I.Employee_Ref_ID)

SELECT * 
FROM DateDifference;


-- show all records
SELECT * 
FROM Employee;

SELECT * 
FROM Incentives;


