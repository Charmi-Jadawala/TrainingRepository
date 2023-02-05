-- use an existing database
USE SqlModuleDB;


-- JOIN: Select employee details from employee table if data exists in incentive table 
SELECT E.Employee_ID, E.First_Name, E.Last_Name, E.Salary, E.Joining_Date, E.Department, E.Manager_ID, SUM(I.Incentive_Amount) AS Total_Incentive
FROM Employee E
JOIN Incentives I
ON E.Employee_ID = I.Employee_Ref_ID
GROUP BY E.Employee_ID, E.First_Name, E.Last_Name, E.Salary, E.Joining_Date, E.Department, E.Manager_ID;

-- SUBQUERY: Select employee details from employee table if data exists in incentive table 
SELECT *
FROM Employee E
WHERE Employee_ID IN (SELECT Employee_Ref_ID FROM Incentives I)


-- JOIN: Find Salary of the employee whose salary is more than Roy Salary 
SELECT E1.Employee_ID, E1.First_Name + ' ' + E1.Last_Name AS Full_Name, E1.Salary
FROM Employee E1
JOIN Employee E2
ON E1.Salary > E2.Salary
WHERE E2.First_Name = 'Roy';

-- SUBQUERY: Find Salary of the employee whose salary is more than Roy Salary 
SELECT Employee_ID, First_Name + ' ' + Last_Name AS Full_Name, Salary
FROM Employee E
WHERE Salary > (SELECT Salary FROM Employee WHERE First_Name = 'Roy');


-- Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount 
CREATE VIEW [Employee View] AS
SELECT E.First_Name, E.Last_Name, E.Salary, E.Joining_Date, I.Incentive_Date, I.Incentive_Amount
FROM Employee E
LEFT JOIN Incentives I
ON E.Employee_ID = I.Employee_Ref_ID;

SELECT * FROM [Employee View];

DROP VIEW [Employee View];


-- Create a view to select Select first_name, incentive amount for those employees who have incentives and incentive amount greater than 3000
CREATE VIEW [Incentive View] AS
SELECT E.First_Name, SUM(I.Incentive_Amount) AS Total_Incentives
FROM Employee E
JOIN Incentives I
ON E.Employee_ID = I.Employee_Ref_ID
GROUP BY E.First_Name
HAVING SUM(I.Incentive_Amount) > 3000;

SELECT * FROM [Incentive View];

DROP VIEW [Incentive View];


-- show all records
SELECT *
FROM Employee;

SELECT * 
FROM Incentives;








