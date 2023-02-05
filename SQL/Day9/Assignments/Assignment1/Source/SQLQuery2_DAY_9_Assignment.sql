-- use an existing database
USE SqlModuleDB;

-- 5 Students Name, Address, City, DOB, Standard need to be inserted in the student table, need to fetch these result from json variable.
CREATE TABLE Student (
	StudentId int identity(1,1) PRIMARY KEY,
	Name varchar(30) NOT NULL,
	Address varchar(255) NOT NULL,
	City varchar(30) NOT NULL,
	DOB date NOT NULL,
	Standard int NOT NULL
	);


DECLARE @studentData nvarchar(max);

SET @studentData = '[
	{
		"Name": "Charmi",
		"Address": "Sarthi Bungalows, Bopal",
		"City": "Ahmedabad",
		"DOB": "2000-09-16",
		"Standard": 7
	},
	{
		"Name": "Jennifer",
		"Address": "Avenue Park, Satellite",
		"City": "Ahmedabad",
		"DOB": "2002-07-07",
		"Standard": 5
	},
	{
		"Name": "John",
		"Address": "Sharanam Bungalows, Nehrunagar",
		"City": "Ahmedabad",
		"DOB": "2008-09-20",
		"Standard": 1
	},
	{
		"Name": "Susan" ,
		"Address": "Saffrony Appartments, South Bopal",
		"City": "Ahmedabad",
		"DOB": "1998-03-13",
		"Standard": 9
	},
	{ 
		"Name": "Micheal",
		"Address": "Shyam Villa, South Bopal",
		"City": "Ahmedabad" ,
		"DOB": "2000-12-30",
		"Standard": 7
	},
	{
		"Name": "Christina",
		"Address": "Aarohi Residency, Navrangpura",
		"City": "Ahmedabad",
		"DOB": "1997-04-08",
		"Standard": 10
	}
]';

SELECT ISJSON(@studentData);

PRINT @studentData;

-- fetch the result from json variable
INSERT INTO Student
SELECT * 
FROM OPENJSON (@studentData)
WITH (
	Name varchar(255),
	Address varchar(255),
	City varchar(255) '$.City',
	DOB date '$.DOB',
	Standard int '$.Standard'
)
SELECT * FROM Student;


-- select output in the json format
SELECT * 
FROM Student
FOR JSON AUTO;

SELECT * 
FROM Student
FOR JSON PATH;


-- show all records
SELECT * 
FROM Student;