ALTER PROCEDURE EmployeeDetails
AS
BEGIN
	SELECT P.BusinessEntityID,
	ISNULL(P.FirstName, '') AS FirstName, 
	ISNULL(P.LastName, '') AS LastName,
	ISNULL(E.JobTitle, '') AS JobTitle
	FROM Person.Person P
	JOIN HumanResources.Employee E
	ON P.BusinessEntityID = E.BusinessEntityID;
END

ALTER PROCEDURE EmployeeDetailsJson
AS
BEGIN
	SELECT 1 AS Id, (SELECT P.BusinessEntityID,
	ISNULL(P.FirstName, '') AS FirstName, 
	ISNULL(P.LastName, '') AS LastName,
	ISNULL(E.JobTitle, '') AS JobTitle
	FROM Person.Person P
	JOIN HumanResources.Employee E
	ON P.BusinessEntityID = E.BusinessEntityID FOR JSON PATH) AS [Json];
END