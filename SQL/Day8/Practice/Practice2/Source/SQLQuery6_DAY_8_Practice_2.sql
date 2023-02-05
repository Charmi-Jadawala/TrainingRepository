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


-- show all records using where clause before creating a non-clustered index
SELECT * 
FROM indices.HrEmployees
WHERE JobTitle = 'Production Technician - WC60';

-- create a new non-clustered index on the JobTitle column for the AdventureWorks database
CREATE NONCLUSTERED INDEX In_HrEmployees_JobTitle
ON indices.HrEmployees(JobTitle);

-- show all records using where clause after creating a non-clustered index
SELECT * 
FROM indices.HrEmployees
WHERE JobTitle = 'Production Technician - WC60';


-- show all records using where clause before creating a unique clustered index
SELECT * 
FROM indices.HrEmployees
WHERE NationalIDNumber = 82638150;


-- create a new unique clustered index on the NationalIDNumber column for the AdventureWorks database
CREATE NONCLUSTERED INDEX In_HrEmployees_NationalIDNumber
ON indices.HrEmployees(NationalIDNumber);

-- show all records using where clause after creating a unique clustered index
SELECT * 
FROM indices.HrEmployees
WHERE NationalIDNumber = 82638150;