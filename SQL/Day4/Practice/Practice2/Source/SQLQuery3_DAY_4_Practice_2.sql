-- use an existing Database
USE AdventureWorks2019;


-- show all records of ProductListPriceHistory
SELECT * 
FROM Production.ProductListPriceHistory;


-- Aggregate Function: SUM
SELECT SUM(ListPrice) AS TotalPrice
FROM Production.ProductListPriceHistory;


-- Aggregate Function: COUNT
SELECT COUNT(ListPrice) AS TotalProducts
FROM Production.ProductListPriceHistory;


-- Aggregate Function: AVG
SELECT AVG(ListPrice) AS AveragePrice
FROM Production.ProductListPriceHistory;


-- Aggregate Function: MAX
SELECT MAX(ListPrice) AS MaxPrice
FROM Production.ProductListPriceHistory;


-- Aggregate Function: MIN
SELECT MIN(ListPrice) AS MinPrice
FROM Production.ProductListPriceHistory;

