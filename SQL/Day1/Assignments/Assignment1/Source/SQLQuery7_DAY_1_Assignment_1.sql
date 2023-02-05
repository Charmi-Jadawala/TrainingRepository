-- use an existing Database
USE AdventureWorks2019;


-- create a table EmployeesCarSales
CREATE TABLE EmployeesCarSales (
	EmployeeId int PRIMARY KEY,
	Name varchar(255) NOT NULL,
	Age int NOT NULL,
	Gender varchar(6) NOT NULL CHECK (Gender IN ('Male', 'Female', 'Other')),
	Designation varchar(255) NOT NULL,
	Salary int NOT NULL,
	CarsSold int DEFAULT 0,
	HireDate varchar(8) NOT NULL,
	CONSTRAINT CHK_Age CHECK (Age >= 18 AND Age <= 60),
	CONSTRAINT CHK_HireDate CHECK (HireDate LIKE '[0-9][0-9]/[0-9][0-9]/[0-9][0-9]')
	);

-- insert records into EmployeesCarSales
INSERT INTO EmployeesCarSales
VALUES (1, 'John Doe', 36, 'Male', 'Sr. Sales Executive', 120000, 77, '22/03/16');

INSERT INTO EmployeesCarSales
VALUES (2, 'Susan Smith', 24, 'Female', 'Salesperson', 30000, 12, '01/07/21');

INSERT INTO EmployeesCarSales (EmployeeId, Name, Age, Gender, Designation, Salary, HireDate)  
VALUES (3, 'Lily Singh', 29, 'Female', 'Jr. Sales Executive', 50000, '16/09/21');

INSERT INTO EmployeesCarSales
VALUES (4, 'Bob Mathew', 42, 'Male', 'Sales Manager', 200000, 85, '07/01/13');

-- drop table EmployeesCarSales
-- DROP TABLE EmployeesCarSales;

-- show all records of EmployeesCarSales
SELECT * 
FROM EmployeesCarSales;


-- create a table Cars
CREATE TABLE Cars (
	CarId int PRIMARY KEY,
	Model varchar(255) NOT NULL,
	Type varchar(5) NOT NULL CHECK (Type IN ('Sedan', 'SUV', 'Other')),
	YearOfManufacturing date NOT NULL,
	Fuel varchar(6) NOT NULL CHECK (Fuel IN ('Petrol', 'Diesel', 'CNG')),
	Stock int NOT NULL,
	Color varchar(255) NOT NULL DEFAULT 'White',
	ExShowroomPrice int NOT NULL
	);

-- insert records into Cars
INSERT INTO Cars
VALUES (1, 'Grand i10', 'Sedan', '2022-04-01', 'Petrol', 3, 'White', 530000);

INSERT INTO Cars
VALUES (2, 'Verna', 'Sedan', '2022-02-15', 'Diesel', 2, 'Black', 1330000);

INSERT INTO Cars
VALUES (3, 'i20', 'Sedan', '2022-03-01', 'Petrol', 3, 'Grey', 740000);

INSERT INTO Cars
VALUES (4, 'Venue', 'SUV', '2022-02-18', 'CNG', 1, 'Red', 1670000);

INSERT INTO Cars
VALUES (5, 'Eon', 'Other', '2021-12-07', 'Petrol', 4, 'White', 420000);

-- drop table Cars
-- DROP TABLE Cars;

-- show all records of Cars
SELECT * 
FROM Cars;


-- create a table CustomersCarSales
CREATE TABLE CustomersCarSales (
	CustomerId int PRIMARY KEY,
	CarId int FOREIGN KEY REFERENCES Cars(CarId),
	Name varchar(255) NOT NULL,
	ContactNumber char(10) CHECK (ContactNumber LIKE '[1-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
	Address varchar(255) NOT NULL DEFAULT 'Ahmedabad',
	);

-- insert records into CustomersCarSales
INSERT INTO CustomersCarSales (CustomerId, CarId, Name, ContactNumber)
VALUES (1, 1, 'Charmi Jadawala', '7434966248');

INSERT INTO CustomersCarSales (CustomerId, CarId, Name, ContactNumber)
VALUES (2, 5, 'Gopi Jadawala', '9427065720');

INSERT INTO CustomersCarSales 
VALUES (3, 2, 'John Doe', '9715872687', 'Baroda');

INSERT INTO CustomersCarSales
VALUES (4, 1, 'Susan Mathew', '7589624621', 'Surat');

INSERT INTO CustomersCarSales 
VALUES (5, 1, 'Bob Smith', '6348279318', 'Rajkot');

INSERT INTO CustomersCarSales (CustomerId, CarId, Name, ContactNumber)
VALUES (6, 1, 'Lily Singh', '9947836152');


-- drop table CustomersCarSales
-- DROP TABLE CustomersCarSales;


-- show all records of CustomersCarSales
SELECT * 
FROM CustomersCarSales;


-- create a table CarSales
CREATE TABLE CarSales (
	SalesId int PRIMARY KEY,
	CustomerId int FOREIGN KEY REFERENCES CustomersCarSales(CustomerId),
	EmpId int FOREIGN KEY REFERENCES EmployeesCarSales(EmployeeId),
	CarId int FOREIGN KEY REFERENCES Cars(CarId),
	Commission int NOT NULL,
	OnRoadPrice int NOT NULL,
	SoldDate date NOT NULL,
	);


-- insert records into CarSales
INSERT INTO CarSales
VALUES (1, 3, 4, 4, 25000, 1730000, '2022-06-16');

INSERT INTO CarSales
VALUES (2, 1, 1, 1, 15000, 600000, '2022-06-07');

INSERT INTO CarSales
VALUES (3, 4, 3, 2, 22000, 1390000, '2022-06-09');


-- drop table CarSales
-- DROP TABLE CarSales;


-- show all records of CarSales
SELECT * 
FROM CarSales;