-- use an existing Database
USE SqlModuleDB;


-- update the portion of the PhoneNumber, within the phone number the substring ‘124’ will be replaced by ‘999’
UPDATE Employees
SET PhoneNumber = REPLACE(PhoneNumber, '124', '999');


-- show all records of Employees
SELECT *
FROM Employees;
