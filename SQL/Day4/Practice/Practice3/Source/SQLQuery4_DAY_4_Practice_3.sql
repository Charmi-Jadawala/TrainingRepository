-- use an existing Database
USE AdventureWorks2019;


-- show all records of ProductListPriceHistory
SELECT * 
FROM Production.ProductListPriceHistory;


-- Aggregate Function: SUM + Group by
SELECT ProductID, SUM(ListPrice) AS TotalPrice
FROM Production.ProductListPriceHistory
GROUP BY ProductID;


-- Aggregate Function: COUNT + Group by
SELECT ProductID, COUNT(ListPrice) AS TotalProducts
FROM Production.ProductListPriceHistory
GROUP BY ProductID;


-- Aggregate Function: AVG + Group by
SELECT ProductID, AVG(ListPrice) AS AveragePrice
FROM Production.ProductListPriceHistory
GROUP BY ProductID;


-- Aggregate Function: MAX + Group by
SELECT ProductID, MAX(ListPrice) AS MaxPrice
FROM Production.ProductListPriceHistory
GROUP BY ProductID;


-- Aggregate Function: MIN + Group by
SELECT ProductID, MIN(ListPrice) AS MinPrice
FROM Production.ProductListPriceHistory
GROUP BY ProductID;


-- Aggregate Function: SUM + Group by + Having + Order by
SELECT ProductID, SUM(ListPrice) AS TotalPrice
FROM Production.ProductListPriceHistory
GROUP BY ProductID
HAVING SUM(ListPrice) > 500
ORDER BY TotalPrice DESC;


-- Aggregate Function: COUNT + Group by + Having
SELECT ProductID, COUNT(ListPrice) AS TotalProducts
FROM Production.ProductListPriceHistory
GROUP BY ProductID
HAVING COUNT(ListPrice) = 2;

