-- use an existing database
USE SqlModuleDB;

-- create a schema
CREATE SCHEMA [index];

-- create table
CREATE TABLE [index].[PlanetsID]
(
	[ID] [int] NOT NULL,
	[Item] [int] NOT NULL,
	[Value] [int] NOT NULL
);

-- insert records into table
INSERT INTO [index].PlanetsID VALUES (4, 23, 66);

INSERT INTO [index].PlanetsID VALUES (1, 12, 59);

INSERT INTO [index].PlanetsID VALUES (3, 66, 24);

-- show all records
SELECT * 
FROM [index].PlanetsID;

SELECT * 
FROM [index].PlanetsID
WHERE ID > 2;

-- creating a clustered index on ID column
CREATE CLUSTERED INDEX In_PlanetsID_ID
ON [index].PlanetsID(ID);

SELECT * 
FROM [index].PlanetsID
WHERE ID > 2;
