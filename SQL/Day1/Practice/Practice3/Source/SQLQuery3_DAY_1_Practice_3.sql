-- use an existing Database
USE AdventureWorks2019;


-- create a table
CREATE TABLE Jobs (
	JobId int NOT NULL UNIQUE,
	JobTitle varchar(255) NOT NULL DEFAULT '',
	MinSalary int NOT NULL DEFAULT 8000,
	MaxSalary int NULL,
	)


-- insert records
INSERT INTO Jobs (JobId, MaxSalary)
VALUES (1, 40000);

INSERT INTO Jobs (JobId, JobTitle, MinSalary, MaxSalary)
VALUES (2, 'Sr. Software Engineer', 3000, 8000);

INSERT INTO Jobs
VALUES (3, 'Software Analyst', 30000, 120000);

INSERT INTO Jobs
VALUES (16, 'Technical Support Executive', 30000, 120000);

INSERT INTO Jobs
VALUES (7, 'Project Manager', 160000, 300000);

-- error: Column name or number of supplied values does not match table definition.
INSERT INTO Jobs
VALUES (3, 'QA', 80000);


-- show all records
SELECT * 
FROM Jobs;