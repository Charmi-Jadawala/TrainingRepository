-- use an existing Database
USE SqlModuleDB;


-- create an employee table
CREATE TABLE Employee (
    Employee_ID int identity(1,1),
	First_Name varchar(20) DEFAULT NULL,
	Last_Name varchar(25) NOT NULL,
	Salary int DEFAULT NULL,
	Joining_Date date NOT NULL,
	Department varchar(20) DEFAULT NULL,
	Manager_ID decimal(6,0) DEFAULT NULL,
	CONSTRAINT pk_Employee_ID PRIMARY KEY (Employee_ID),
);

-- insert records into employee table
INSERT INTO Employee (First_Name, Last_Name, Salary, Joining_Date, Department)
VALUES ('John', 'Abraham', 1000000, '2013-01-01', 'Banking');

INSERT INTO Employee VALUES 
('Michael', 'Clarke', 800000, '2013-01-01', 'Insurance', 1),
('Roy', 'Thomas', 700000, '2013-02-01', 'Banking', 1),
('Tom', 'Jose', 600000, '2013-02-01', 'Insurance', 2),
('Jerry', 'Pinto', 650000, '2013-02-01', 'Insurance', 3),
('Philip', 'Mathew', 750000, '2013-01-01', 'Services', 3),
('TestName1', '123', 650000, '2013-01-01', 'Services', 2),
('TestName2', 'Lname%', 600000, '2013-02-01', 'Insurance', 2);

-- show all records of Employee
SELECT * 
FROM Employee;


-- create an Incentives table
CREATE TABLE Incentives (
	Employee_Ref_ID int NOT NULL,
	Incentive_Date date NOT NULL,
	Incentive_Amount int DEFAULT NULL,
	CONSTRAINT fk_Employee_Ref_ID FOREIGN KEY (Employee_Ref_ID) REFERENCES Employee(Employee_ID)
);

-- insert records into Incentives table
INSERT INTO Incentives VALUES
(1, '2013-02-01', 5000),
(2, '2013-02-01', 3000),
(3, '2013-02-01', 4000),
(1, '2013-01-01', 4500),
(2, '2013-01-01', 3500);

-- show all records of Incentives
SELECT * 
FROM Incentives;
