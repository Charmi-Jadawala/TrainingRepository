-- use an existing database
USE AdventureWorks2019;

-- show all records
SELECT * 
FROM HumanResources.Employee;

-- create a schema indices
CREATE SCHEMA indices;

-- copy table data into new table
SELECT * INTO indices.HrEmployees
FROM HumanResources.Employee;

-- show all records
SELECT * 
FROM indices.HrEmployees;

-- show all records using where clause before creating a clustered index
SELECT * 
FROM indices.HrEmployees
WHERE BusinessEntityID BETWEEN 100 AND 200;


-- create a new clustered index on the BusinessEntityID column for the AdventureWorks database
ALTER TABLE indices.HrEmployees
ADD CONSTRAINT PK_BusinessEntityID PRIMARY KEY(BusinessEntityID);

-- show all records using where clause after creating a clustered index
SELECT * 
FROM indices.HrEmployees
WHERE BusinessEntityID BETWEEN 100 AND 200;