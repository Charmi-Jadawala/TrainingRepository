-- use an existing Database
USE AdventureWorks2019;


-- DML: SELECT
SELECT * 
FROM Person.Person;


-- DML: INSERT
SELECT * 
FROM Jobs;

INSERT INTO Jobs (JobId, JobTitle, MaxSalary)
VALUES (4, 'Assistant HR', 200000);

INSERT INTO Jobs (JobId, JobTitle, MaxSalary)
VALUES (5, 'Assistant HR', 200000);


-- DML: UPDATE
UPDATE Jobs 
SET MinSalary = 12000
WHERE JobId = 4;


-- DML: DELETE
DELETE FROM Jobs
WHERE JobId = 5;


-- DQL: Basic Select Statement
SELECT * 
FROM Person.Address;

SELECT AddressID, AddressLine1, City, StateProvinceID, PostalCode
FROM Person.Address;


-- DQL: Literals & Concatenate
SELECT * 
FROM Employees;

SELECT FirstName + ' ' + LastName AS [Full Name]
FROM Employees;


-- DQL: Calculating Column Values
SELECT * 
FROM Jobs;

SELECT JobId, JobTitle, MinSalary, MaxSalary, MaxSalary - (MaxSalary * 0.10) AS NetSalary 
FROM Jobs;


-- DQL: Where clause
SELECT * 
FROM Jobs
WHERE JobId = 3;


-- DQL: Comparison & Logical Operator
SELECT * 
FROM Jobs
WHERE MinSalary >= 30000;


-- DQL: Range Operator
SELECT * 
FROM Jobs
WHERE MinSalary BETWEEN 100000 AND 300000;


-- DQL: not keyword
SELECT * 
FROM Cars;

SELECT * 
FROM Cars
WHERE NOT Type = 'Sedan';

SELECT * 
FROM Cars
WHERE NOT Type = 'Sedan';


-- DQL: in keyword
SELECT * 
FROM Cars
WHERE Type IN ('Sedan', 'SUV');


-- DQL: Like
SELECT * 
FROM Employees
WHERE FirstName LIKE '%i';


-- DQL: OrderBy
SELECT * 
FROM Employees
ORDER BY PhoneNumber ASC;


-- DQL: Top
SELECT * 
FROM Cars;

SELECT Top 4 * 
FROM Cars;


-- DQL: Distinct
SELECT DISTINCT Fuel 
FROM Cars;