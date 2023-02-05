-- use an existing database
USE SqlModuleDB;


-- create a schema
CREATE SCHEMA student;


-- create tables
CREATE TABLE student.Student (
	studentid int identity(1,1) PRIMARY KEY,
	name varchar(30) NOT NULL
	);

CREATE TABLE student.StudentDetail (
	studentdetailid int identity(1,1) PRIMARY KEY,
	studentid int REFERENCES student.Student(studentid),
	standard int NOT NULL,
	gender char(3) CHECK (gender IN ('M', 'F', 'O')) NOT NULL
	);

CREATE TABLE student.StudentPresent (
	studentpresentid int identity(1,1) PRIMARY KEY,
	studentid int REFERENCES student.Student(studentid),
	month int NOT NULL,
	present decimal(4, 2)
	);

CREATE TABLE student.StudentHours (
	studenthoursid int identity(1,1) PRIMARY KEY,
	studentid int REFERENCES student.Student(studentid),
	date date NOT NULL,
	hours decimal(4,2) NOT NULL
	);

CREATE TABLE student.Product (
	productid int identity(1,1) PRIMARY KEY,
	name varchar(30) NOT NULL
	);

CREATE TABLE student.ProductPrice (
	productpriceid int identity(1,1) PRIMARY KEY,
	productid int REFERENCES student.Product(productid),
	code char(2) NOT NULL,
	effdt date NOT NULL,
	price decimal(4,2) NOT NULL
	);


-- insert data into tables
INSERT INTO student.Student VALUES
('Charmi'),
('John'),
('Lily'),
('Susan'),
('Mathew'),
('Bob'),
('Christina');

INSERT INTO student.StudentDetail VALUES
(3, 6, 'F'),
(7, 6, 'F'),
(5, 4, 'M'),
(1, 2, 'F'),
(6, 3, 'M'),
(2, 4, 'M'),
(4, 3, 'F');

INSERT INTO student.StudentPresent VALUES
(1, 4, 30),
(3, 6, 26),
(2, 4, 27.50),
(2, 5, 20),
(6, 4, 18),
(5, 5, 28),
(7, 6, 28.50),
(2, 6, 22.50),
(1, 6, 29),
(7, 4, 28),
(2, 7, 10),
(4, 7, 19),
(3, 4, 27),
(6, 5, 20),
(6, 6, 26),
(1, 5, 17),
(6, 4, 20),
(1, 7, 20),
(7, 7, 24.50);

INSERT INTO student.StudentHours VALUES
(1, '2022-09-16', 6),
(2, '2022-07-22', 8.5),
(3, '2022-07-13', 7.25),
(4, '2022-09-09', 4),
(6, '2022-08-18', 5.50),
(5, '2022-06-26', 8.5);

INSERT INTO student.StudentHours VALUES
(4, '2022-08-16', 6.75),
(6, '2022-09-22', 8),
(3, '2022-10-13', 7.5);

INSERT INTO student.Product VALUES
('Pen'),
('Pencil'),
('Eraser'),
('Ruler'),
('Water Colors'),
('Crayons'),
('Geometry Box');

INSERT INTO student.ProductPrice VALUES
(3, 'AC', '2022-06-23', 3),
(5, 'AB', '2022-03-20', 160),
(2, 'BC', '2022-07-16', 2),
(7, 'CA', '2022-04-8', 100),
(1, 'AB', '2022-06-13', 4),
(4, 'AC', '2022-06-2', 10),
(6, 'CA', '2022-09-17', 80);


-- show all records
SELECT *
FROM student.Student;

SELECT *
FROM student.StudentDetail;

SELECT *
FROM student.StudentPresent;

SELECT *
FROM student.StudentHours;

SELECT *
FROM student.Product;

SELECT *
FROM student.ProductPrice;


