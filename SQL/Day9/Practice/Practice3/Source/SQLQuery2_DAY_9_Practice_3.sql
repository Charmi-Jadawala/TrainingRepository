-- use an existing database
USE SqlModuleDB;

CREATE TABLE Authors (
    ID INT IDENTITY NOT NULL PRIMARY KEY,
    AuthorName NVARCHAR(MAX),
    Age INT,
    Skillsets NVARCHAR(MAX),
    NumberOfPosts INT
);

INSERT INTO Authors (AuthorName,Age,Skillsets,NumberOfPosts) VALUES 
('Geek',25,'Java,Python,.Net',5),
('Geek2',22,'Android,Python,.Net',15),
('Geek3',23,'IOS,GO,R',10),
('Geek4',24,'Java,Python,GO',5);

-- Convert SQL Server data to JSON or export JSON: FOR JSON PATH
SELECT * 
FROM Authors
FOR JSON PATH;

-- Convert SQL Server data to JSON or export JSON: FOR JSON AUTO
SELECT * 
FROM Authors
FOR JSON AUTO;

-- Convert SQL Server data to JSON or export JSON: WITHOUT_ARRAY_WRAPPER
SELECT * 
FROM Authors
WHERE AuthorName = 'Geek3'
FOR JSON AUTO;

SELECT * 
FROM Authors
WHERE AuthorName = 'Geek3'
FOR JSON AUTO, WITHOUT_ARRAY_WRAPPER;

SELECT * 
FROM Authors
WHERE AuthorName = 'Geek3' OR AuthorName = 'Geek2'
FOR JSON AUTO, WITHOUT_ARRAY_WRAPPER;