-- create a schema student
CREATE SCHEMA student;

-- create a table Student_Details
CREATE TABLE student.Student_Details (
	Name varchar(30) NOT NULL,
	Standard int NOT NULL,
	Sex char(3) CHECK (SEX IN ('M', 'F', 'O')) NOT NULL,
	MonthlyPresent decimal(4,2) NULL,
	DailyHours decimal(4,2) NULL
	);

-- create a table Products
CREATE TABLE student.Products (
	Name varchar(30) NOT NULL,
	Price int NOT NULL
	);

-- create a table Materials
CREATE TABLE student.Materials (
	Name varchar(30) NOT NULL,
	Price varchar(10) CHECK (Price LIKE 'Rs. %') NOT NULL
	);

-- insert records into table Student_Details
INSERT INTO student.Student_Details VALUES
('Charmi', 6, 'F', 30.00, 8.50);

INSERT INTO student.Student_Details VALUES
('Susan', 3, 'F', 26.50, 7.00),
('John', 4, 'M', 29.75, 8.50),
('Lily', 7, 'F', 20.00, 7.25),
('Bob', 6, 'M', 15.00, 6.00),
('Mathew', 6, 'M', 30.00, 8.50),
('Albert', 6, 'M', 25.25, 5.25)

-- insert records into table Products
INSERT INTO student.Products VALUES 
('Pen', 15),
('Pencil', 5),
('Eraser', 4),
('Ruler', 20)

-- insert records into table Materials
INSERT INTO student.Materials VALUES 
('Silk', 'Rs. 600'),
('Khadi', 'Rs. 1000'),
('Polyester', 'Rs. 300'),
('Cotton', 'Rs. 700'),
('Mix', 'Rs. 200'),
('Shiffon', 'Rs. 400')

-- show all records of table Student_Details
SELECT * 
FROM student.Student_Details;

-- show all records of table Products
SELECT * 
FROM student.Products;

-- show all records of table Student_Details
SELECT * 
FROM student.Materials;

-- Remove all the records from table Products without using DELETE
TRUNCATE TABLE student.Products;
-- Remove all the records from table Products with using DELETE
DELETE FROM student.Products;

-- Remove all the records from table Materials without using DELETE
TRUNCATE TABLE student.Materials;
-- Remove all the records from table Materials with using DELETE
DELETE FROM student.Materials;

-- Remove all the records from table Student_Details without using DELETE
TRUNCATE TABLE student.Student_Details;
-- Remove all the records from table Student_Details with using DELETE
DELETE FROM student.Student_Details;

-- Delete table Student_Details
DROP TABLE student.Student_Details;

-- Delete table Products
DROP TABLE student.Products;

-- Delete table Materials
DROP TABLE student.Materials;