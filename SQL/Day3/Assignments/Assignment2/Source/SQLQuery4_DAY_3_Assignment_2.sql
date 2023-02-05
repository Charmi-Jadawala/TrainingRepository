-- use an existing Database
USE SqlModuleDB;


-- display the FirstName and Salary for all employees. Format the salary to be 10 characters long, left-padded with the $ symbol. Label the column SALARY
SELECT FirstName, Salary, RIGHT('$$$$$$$$$$' + convert(varchar(10), Salary), 10) AS SALARY
FROM Employees;


-- show all records of Employees
SELECT * 
FROM Employees;