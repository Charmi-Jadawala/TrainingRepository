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


-- show all records using where clause before creating a non-clustered index
SELECT * 
FROM indices.Person
WHERE FirstName = 'John';

-- create a new non-clustered index on the FirstName column for the AdventureWorks database
CREATE NONCLUSTERED INDEX In_Person_FirstName
ON indices.Person(FirstName);

-- show all records using where clause after creating a non-clustered index
SELECT * 
FROM indices.Person
WHERE FirstName = 'John';


-- show all records using where clause before creating a unique clustered index
SELECT * 
FROM indices.Person
WHERE FirstName + ' ' + LastName = 'John Kelly';

-- create a new unique clustered index on the FirstName column for the AdventureWorks database
CREATE UNIQUE INDEX In_Person_FullName
ON indices.Person(FirstName, LastName);

-- show all records using where clause after creating a unique clustered index
SELECT * 
FROM indices.Person
WHERE FirstName + ' ' + LastName = 'John Kelly';