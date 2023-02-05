-- =============================================
-- Author:		Charmi
-- Create date: 29-06-2022
-- Description:	Create a Store Procedure that will accept city name and returns the number of customers in that city.
-- =============================================
ALTER PROCEDURE cspCustomerCount
	@inpCity nvarchar(18)
AS
BEGIN
	SET NOCOUNT ON;

	SELECT COUNT(CName) AS CustomerCount
	FROM bank.Customer 
	WHERE City = @inpCity;
END
GO


EXEC cspCustomerCount 'Surat';

