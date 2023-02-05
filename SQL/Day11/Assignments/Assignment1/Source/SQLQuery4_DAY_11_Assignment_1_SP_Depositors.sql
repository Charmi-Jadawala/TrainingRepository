-- =============================================
-- Author:		Charmi
-- Create date: 29-06-2022
-- Description:	Create a Store Procedure which will accept name of the customer as input parameter and 
--              product the following output, List Names of Customers who are Depositors and have Same 
--              Branch City as that of input parameter customer’s Name.
-- =============================================
ALTER PROCEDURE cspDepositors
	@inpCustomer nvarchar(19),
	@Depositors int OUTPUT
AS
BEGIN
	SET NOCOUNT ON;

	SELECT CName
	FROM bank.Deposit 
	WHERE NOT CName = @inpCustomer AND BName IN (SELECT B.BName FROM bank.Branch B JOIN bank.Deposit D ON B.BName = D.BName 
		WHERE B.City = (SELECT B.City FROM bank.Branch B JOIN bank.Deposit D ON B.BName = D.BName WHERE D.CName = @inpCustomer));  
	
	SELECT @Depositors = @@ROWCOUNT;
END
GO


DECLARE @CustomersCount int;

EXEC cspDepositors 'Mehul', @CustomersCount OUTPUT;

SELECT @CustomersCount AS NoOfDepositors;