-- =============================================
-- Author:		Charmi
-- Create date: 30-06-2022
-- Description:	Create a Store Procedure which will accept city of the customer as input parameter and 
--				product the following output List in JSON format List All the Customers Living in city 
--				provided in input parameter and Having the Branch City as MUMBAI or DELHI 
-- =============================================
ALTER PROCEDURE cspCustomerCity
	@inpCity nvarchar(19)
AS
BEGIN
	SET NOCOUNT ON;

	SELECT C.CName FROM bank.Customer C WHERE C.City = @inpCity 
	UNION
	SELECT D.CName FROM bank.Deposit D JOIN bank.Branch B ON D.BName = B.BName 
	WHERE B.City = 'Mumbai' OR B.City = 'Delhi' FOR JSON AUTO
END
GO


EXEC cspCustomerCity 'Nagpur';


SELECT *
FROM bank.Customer;

SELECT *
FROM bank.Branch;

SELECT *
FROM bank.Deposit;

