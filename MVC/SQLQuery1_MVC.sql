--Create a database called MVC_DB
CREATE DATABASE MVC_DB
GO
--Use MVC_DB
USE MVC_DB
GO
--Create a Table called Employee
CREATE TABLE Employee
(
  EmployeeId int Primary Key Identity(1,1),
  Name nvarchar(50),
  Gender nvarchar(10),
  City nvarchar(50),
  Salary decimal(18,2)
)
GO
--Insert some values into Employee Table
INSERT INTO Employee values('Pranaya','Male','Mumbai', 2000)
INSERT INTO Employee values('Sambit','Male','Chennai', 3000)
INSERT INTO Employee values('Priyanka','Female','Hyderabad', 4000)
INSERT INTO Employee values('Anurag','Male','Cheenai', 4000)
INSERT INTO Employee values('Subrat','Male','Mumbai', 3000)
INSERT INTO Employee values('Preety','Female','Mumbai', 2000)
INSERT INTO Employee values('Trupti','Female','Hyderabad', 5000)
GO

SELECT * FROM Employee;