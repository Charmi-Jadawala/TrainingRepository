-- Create a Database
-- CREATE DATABASE SqlTrainingDB;


-- use an existing Database
USE AdventureWorks2019;


-- Drop a Database
-- DROP DATABASE TutorialDB;


-- Create a Table
CREATE TABLE countries (
	CountryId int NOT NULL,
	CountryName varchar(255) NOT NULL,
	RegionId int NOT NULL
	UNIQUE (CountryId, RegionId),
	CONSTRAINT CHK_Country CHECK ( CountryName IN ('India', 'China', 'Italy') )
	)


-- Insert records
INSERT INTO countries
VALUES (1, 'India', 1);

INSERT INTO countries
VALUES (2, 'Italy', 1);

-- Error: Violation of UNIQUE Key
INSERT INTO countries
VALUES (1, 'China', 1);

INSERT INTO countries
VALUES (3, 'China', 1);

-- Error: CHECK constraint "CHK_Country"
INSERT INTO countries
VALUES (4, 'Russia', 1);


-- Show all records
SELECT * 
FROM countries;