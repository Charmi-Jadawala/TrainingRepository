-- =============================================
-- Author:		Charmi
-- Create date: 30-06-2022
-- Description:	Create a Store Procedure which will accept name of the customer as input parameter and 
--              produce the following output List in JSON format, All the Depositors having Deposit in 
--              All the Branches where input parameter customer is Having an Account
-- =============================================
CREATE PROCEDURE cspCustomerBranch
	@inpCustomer nvarchar(19)
AS
BEGIN
	SET NOCOUNT ON;

	SELECT CName
	FROM bank.Deposit 
	WHERE NOT CName = @inpCustomer AND BName = (SELECT BName FROM bank.Deposit WHERE CName = @inpCustomer);
END
GO


EXEC cspCustomerBranch 'Shruti';


SELECT *
FROM bank.Deposit;
