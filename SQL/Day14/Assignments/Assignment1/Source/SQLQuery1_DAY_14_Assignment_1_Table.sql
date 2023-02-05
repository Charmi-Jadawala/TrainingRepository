-- use an existing database
USE SqlModuleDB;


-- create a new schema
CREATE SCHEMA school;


-- create tables
CREATE TABLE school.Student (
	StudentID int identity(1,1) PRIMARY KEY,
	StudentName varchar(30) NOT NULL,
	TotalFees int NOT NULL,
	RemainingAmt int NOT NULL
);

CREATE TABLE school.Course (
	CourseID int identity(1,1) PRIMARY KEY,
	CourseName varchar(30) NOT NULL,
	TotalFees int NOT NULL
);

CREATE TABLE school.CourseEnrolled (
	CourseEnrolledID int identity(1, 1) PRIMARY KEY,
	StudentID int FOREIGN KEY REFERENCES school.Student(StudentID),
	CourseID int FOREIGN KEY REFERENCES school.Course(CourseID)
);

CREATE TABLE school.FeePayment (
	FeePaymentID int identity(1, 1) PRIMARY KEY,
	StudentID int FOREIGN KEY REFERENCES school.Student(StudentID),
	AmountPaid int NOT NULL,
	DateOfPayment date DEFAULT GETDATE()
);


-- show all records
SELECT *
FROM school.Student;

SELECT *
FROM school.Course;

SELECT *
FROM school.CourseEnrolled;

SELECT *
FROM school.FeePayment;

