-- use an existing Database
USE AdventureWorks2019;


-- create a table
CREATE TABLE JobHistory (
	EmployeeId int NOT NULL UNIQUE,
	StartDate varchar(255) NOT NULL,
	EndDate varchar(255) NOT NULL,
	JobId int NOT NULL,
	DepartmentId int NOT NULL,
	CONSTRAINT CHK_Dates CHECK (EndDate LIKE '[0-9][0-9]/[0-9][0-9]/[0-9][0-9]')
	)


-- drop table
-- DROP TABLE JobHistory;


-- insert records
INSERT INTO JobHistory
VALUES (1, '22/07/21', '16/09/22', 16, 2);

INSERT INTO JobHistory
VALUES (2, '2/03/18', '31/12/24', 7, 1);

-- error: CHECK constraint "CHK_Dates"
INSERT INTO JobHistory
VALUES (2, '08/12/2020', '30/05/2022', 16, 2);


-- show all records
SELECT * 
FROM JobHistory;