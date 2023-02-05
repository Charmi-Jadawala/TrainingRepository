-- database
CREATE DATABASE ToyManufacturingCompany;

-- tables
CREATE TABLE Toys
(
	Id int identity(1, 1) PRIMARY KEY,
	Name varchar(30) NOT NULL,
	Price decimal(8, 2) NOT NULL
);

CREATE TABLE Plants
(
	Id int identity(1, 1) PRIMARY KEY,
	Name varchar(30) NOT NULL,
	Location varchar(30) NOT NULL
);

CREATE TABLE ManufacturedAt
(
	Id int identity(1, 1) PRIMARY KEY,
	ToyId int FOREIGN KEY REFERENCES Toys(Id) NOT NULL,
	PlantId int FOREIGN KEY REFERENCES Plants(Id) NOT NULL
);

CREATE TABLE Customer
(
	Id int identity(1, 1) PRIMARY KEY,
	FirstName varchar(30) NOT NULL,
	LastName varchar(30) NOT NULL
);

CREATE TABLE Address
(
	Id int identity(1, 1) PRIMARY KEY,
	FlatNo varchar(10) NOT NULL,
	AppartmentName varchar(30) NOT NULL,
	Landmark varchar(200) NULL,
	Area varchar(20) NULL,
	Pincode decimal(6, 0) NOT NULL
);

CREATE TABLE CustomerAddress
(
	Id int identity(1, 1) PRIMARY KEY,
	CustomerId int FOREIGN KEY REFERENCES Customer(Id) NOT NULL,
	AddressId int FOREIGN KEY REFERENCES Address(Id) NOT NULL
);

CREATE TABLE Orders(
	Id [int] identity(1,1) PRIMARY KEY,
	CustomerId int FOREIGN KEY REFERENCES Customer(Id) NOT NULL,
	OrderDate date NOT NULL,
	OrderStatus varchar(20) DEFAULT 'Placed',
	OrderAmount decimal(8, 2) NULL,
	PayableAmount decimal(8, 2) NULL
);

CREATE TABLE OrderItems(
	Id int identity(1,1) PRIMARY KEY,
	ProductId int FOREIGN KEY REFERENCES Toys(Id) NOT NULL,
	OrderId int FOREIGN KEY REFERENCES Orders(Id) NOT NULL,
	Qty int NOT NULL DEFAULT 1,
);


-- records
SELECT *
FROM Toys;

SELECT *
FROM Plants;

SELECT *
FROM ManufacturedAt;

SELECT *
FROM Customer;

SELECT *
FROM Address;

SELECT *
FROM CustomerAddress;

SELECT *
FROM Orders;

SELECT *
FROM OrderItems;


-- SP for customer address
ALTER PROCEDURE GetCustomerAddresses
AS
BEGIN
	SELECT C.Id AS CustomerId, C.FirstName, C.LastName, A.FlatNo, A.AppartmentName, A.Landmark, A.Area, A.Pincode
	FROM Customer C
	LEFT JOIN CustomerAddress CA ON C.Id = CA.CustomerId
	LEFT JOIN Address A ON CA.AddressId = A.Id
END

EXEC GetCustomerAddresses;


-- trigger to update the order amt & payable amt
ALTER TRIGGER SetOrderAmt
ON OrderItems
AFTER INSERT
AS
BEGIN
	DECLARE @OrderID int;
    SET @OrderID = 	(SELECT TOP 1 Id FROM Orders ORDER BY Id DESC);

	UPDATE Orders
	SET OrderAmount = (SELECT SUM(OI.Qty * T.Price) 
	FROM Orders O
	JOIN OrderItems OI ON O.Id = OI.OrderId
	JOIN Toys T ON OI.ProductId = T.Id
	GROUP BY O.Id
	HAVING O.Id = @OrderID)
	WHERE Orders.Id = @OrderID

	UPDATE Orders
	SET PayableAmount = (SELECT
		CASE
			WHEN OrderAmount >= 5000 THEN OrderAmount - (0.30 * OrderAmount)
			WHEN OrderAmount >= 2500 THEN OrderAmount - (0.20 * OrderAmount)
			WHEN OrderAmount >= 1000 THEN OrderAmount - (0.10 * OrderAmount)
			ELSE OrderAmount
		END AS PayableAmount
	FROM Orders O
	WHERE O.Id = @OrderID)
	WHERE Orders.Id = @OrderID
END


