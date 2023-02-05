-- =============================================
-- Author:		Charmi
-- Create date: 29-06-2022
-- Description:	Count the Number of Customers Living in the City where Branch is Located.
-- =============================================
CREATE PROCEDURE cspCustomerBranchCity
AS
BEGIN
	SET NOCOUNT ON;

	SELECT COUNT(C.CName) AS CustomerCount FROM (
	SELECT D.CName, D.BName, B.City
	FROM bank.Deposit D
	JOIN bank.Branch B
	ON D.BName = B.BName) temp 
	JOIN bank.Customer C 
	ON temp.CName = C.CName
	WHERE C.City = temp.City;
END
GO


EXEC cspCustomerBranchCity;

