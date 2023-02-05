-- use an existing Database
USE SqlModuleDB;


-- create a table ExamResult
CREATE TABLE ExamResult (
	StudentId int identity(1, 1) PRIMARY KEY,
	StudentName varchar(255) NOT NULL, 
	Subject varchar(30) NOT NULL, 
	Marks int NOT NULL
	);


-- insert records into ExamResult
INSERT INTO ExamResult
VALUES ('Lily', 'Maths', 65);

INSERT INTO ExamResult
VALUES ('Lily', 'Science', 80);

INSERT INTO ExamResult
VALUES ('Lily', 'english', 70);

INSERT INTO ExamResult
VALUES ('Isabella', 'Maths', 50);

INSERT INTO ExamResult
VALUES ('Isabella', 'Science', 70);

INSERT INTO ExamResult
VALUES ('Isabella', 'english', 90);

INSERT INTO ExamResult
VALUES ('Olivia', 'Maths', 55);

INSERT INTO ExamResult
VALUES ('Olivia', 'Science', 60);

INSERT INTO ExamResult
VALUES ('Olivia', 'english', 89);


-- Ranking Functions: Row_number()
SELECT *, 
ROW_NUMBER() OVER (ORDER BY Marks DESC) [Row Number]
FROM ExamResult;


-- Ranking Functions: Rank()
SELECT *, 
ROW_NUMBER() OVER (ORDER BY Marks DESC) [Row Number],
RANK() OVER (ORDER BY Marks DESC) [Rank]
FROM ExamResult;


-- Ranking Functions: Rank() with Partition
SELECT *,
RANK() OVER(PARTITION BY Studentname ORDER BY Marks DESC) [Rank]
FROM ExamResult;


-- Ranking Functions: Dense_rank()
SELECT *, 
ROW_NUMBER() OVER (ORDER BY Marks DESC) [Row Number],
DENSE_RANK() OVER (ORDER BY Marks DESC) [Dense Rank]
FROM ExamResult;


-- -- Ranking Functions: Ntile(N)
SELECT *, 
NTILE(2) OVER(ORDER BY Marks DESC) Rank
FROM ExamResult;


-- show all records of ExamResult
SELECT * 
FROM ExamResult;




