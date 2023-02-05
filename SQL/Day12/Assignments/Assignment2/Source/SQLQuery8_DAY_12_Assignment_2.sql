-- =============================================
-- Author:		Charmi
-- Create date: 30-06-2022
-- Description:	Create a Procedure which will accept input in JSON parameter CustomerName, City, ACTNO, Branch, amount 
--				And insert these record in the Deposit table. Before inserting some validation should be done like 
--				amount should be greater than 10Rs. and date should always be current date.
-- =============================================
ALTER PROCEDURE cspInsertCustomer
	@inpCustomer nvarchar(max)
AS
BEGIN
	SET NOCOUNT ON;

	IF CONVERT(int, JSON_VALUE(@inpCustomer, '$.Amount')) < 10
		RETURN;

	ELSE IF CAST(JSON_VALUE(@inpCustomer, '$.Date') AS date) <> CAST(GETDATE() AS date)
		RETURN;
	ELSE
		BEGIN
			INSERT INTO bank.Customer VALUES
			(JSON_VALUE(@inpCustomer, '$.CustomerName'), JSON_VALUE(@inpCustomer, '$.City'));

			INSERT INTO bank.Deposit VALUES
			(JSON_VALUE(@inpCustomer, '$.ActNo'), JSON_VALUE(@inpCustomer, '$.CustomerName'),
				JSON_VALUE(@inpCustomer, '$.Branch'), CONVERT(int, JSON_VALUE(@inpCustomer, '$.Amount')),
					CONVERT(date, JSON_VALUE(@inpCustomer, '$.Date')));
			
			PRINT 'Data inserted Successfully...'
		END		
END
GO


DECLARE @CustomerData nvarchar(max);

SET @CustomerData = N'{
	"CustomerName": "Micheal",
	"City": "Nagpur",
	"ActNo": "113",
	"Branch": "VRCE",
	"Amount": 9000,
	"Date": "2022-06-30"
}';
 
EXEC cspInsertCustomer @CustomerData;


SELECT *
FROM bank.Customer;

SELECT *
FROM bank.Branch;

SELECT *
FROM bank.Deposit;