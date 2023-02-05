-- use an existing database
USE AdventureWorks2019;

-- show all records
SELECT * 
FROM Person.Person;


-- create a schema indices
CREATE SCHEMA indices;

-- copy table data into new table
SELECT * INTO indices.Person
FROM Person.Person;

-- show all records
SELECT * 
FROM indices.Person;

-- show all records using where clause before creating a clustered index
SELECT * 
FROM indices.Person
WHERE BusinessEntityID BETWEEN 1000 AND 6000;


-- create a new clustered index on the BusinessEntityID column for the AdventureWorks database
CREATE CLUSTERED INDEX In_Person_BusinessEntityID
ON indices.Person(BusinessEntityID);

-- show all records using where clause after creating a clustered index
SELECT * 
FROM indices.Person
WHERE BusinessEntityID BETWEEN 1000 AND 6000;