-- use an existing database
USE SqlModuleDB;

-- create a schema
CREATE SCHEMA bank;

-- create tables
CREATE TABLE bank.Customer (
	CName varchar(19) PRIMARY KEY,
	City varchar(18) NOT NULL
);

CREATE TABLE bank.Branch (
	BName varchar(18) PRIMARY KEY,
	City varchar(18) NOT NULL
);

CREATE TABLE bank.Borrow (
	LoanNo varchar(5) PRIMARY KEY,
	CName varchar(19) FOREIGN KEY REFERENCES bank.Customer(CName),
	BName varchar(18) FOREIGN KEY REFERENCES bank.Branch(BName),
	Amount int NOT NULL
);

CREATE TABLE bank.Deposit (
	ActNo varchar(5) PRIMARY KEY,
	CName varchar(19) FOREIGN KEY REFERENCES bank.Customer(CName),
	BName varchar(18) FOREIGN KEY REFERENCES bank.Branch(BName),
	Amount int NOT NULL,
	Adate date NOT NULL
);


-- show all records
SELECT *
FROM bank.Customer;

SELECT *
FROM bank.Branch;

SELECT *
FROM bank.Deposit;

SELECT *
FROM bank.Borrow;





