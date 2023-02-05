-- use an existing Database
USE AdventureWorks2019;


-- create a Departments table
CREATE TABLE Departments (
	DepartmentID int NOT NULL PRIMARY KEY,
	DepartmentName varchar(255) NOT NULL
	)

-- insert records into Departments table
INSERT INTO Departments
VALUES (1, '.NET');

INSERT INTO Departments
VALUES (2, 'Node/React');

INSERT INTO Departments
VALUES (3, 'Mobile');

INSERT INTO Departments
VALUES (4, 'PHP');

INSERT INTO Departments
VALUES (5, 'QA');

INSERT INTO Departments
VALUES (6, 'Network');

INSERT INTO Departments
VALUES (7, 'HR');

-- show all records of Departments table
SELECT * 
FROM Departments;


-- create an Employees table
CREATE TABLE Employees (
	Employee_Id int NOT NULL PRIMARY KEY,
	FirstName varchar(255) NOT NULL,
	LastName varchar(255) NOT NULL,
	Email varchar(255) NOT NULL,
	PhoneNumber char(10) CHECK (PhoneNumber LIKE '[1-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
	Hire_Date date NOT NULL,
	Job_Id int NOT NULL FOREIGN KEY REFERENCES Jobs(JobId),
	Salary int NOT NULL,
	Commission int NOT NULL DEFAULT 0,
	Manager_Id int NOT NULL DEFAULT 1,
	Department_Id int NOT NULL FOREIGN KEY REFERENCES Departments(DepartmentID),
	CONSTRAINT CHK_Email CHECK (Email LIKE '_%@_%.__%')	
	)

-- insert records into Employees table
INSERT INTO Employees (Employee_Id, FirstName, LastName, Email, PhoneNumber, Hire_Date, Job_Id, Salary, Manager_Id, Department_Id)
VALUES (1, 'Charmi', 'Jadawala', 'charmijadawala1690@gmail.com', '7434966248', '2021-07-22', 2, 30000, 3, 1);

INSERT INTO Employees (Employee_Id, FirstName, LastName, Email, PhoneNumber, Hire_Date, Job_Id, Salary, Commission, Manager_Id, Department_Id)
VALUES (2, 'Gopi', 'Jadawala', 'gopijadawala22@gmail.com', '9427065720', '2020-09-16', 3, 120000, 20000, 2, 7);

INSERT INTO Employees 
VALUES (3, 'Lily', 'Mathews', 'lilymathews18@gmail.com', '8729481177', '2018-10-01', 1, 60000, 2000, 6, 6);

INSERT INTO Employees 
VALUES (4, 'John', 'Doe', 'johndoe07@gmail.com', '7830592198', '2019-12-17', 1, 70000, 4000, 5, 4);


-- drop Employees table
-- DROP TABLE Employees;


-- show all records of Employees table
SELECT * 
FROM Employees;