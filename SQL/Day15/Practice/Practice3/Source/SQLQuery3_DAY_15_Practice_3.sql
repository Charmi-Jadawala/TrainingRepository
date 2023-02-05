-- use an existing database
USE SqlModuleDB;


-- explicit transaction with rollback & try-catch
BEGIN TRAN FundsTransfer
BEGIN TRY
	UPDATE bank.CustomerData
	SET Balance -= 600
	WHERE CustomerName = 'John';

	UPDATE bank.CustomerData
	SET Balance += 600
	WHERE CustomerName = 'Susan';

	COMMIT TRAN FundsTransfer;
	PRINT 'Transaction Successful...';
END TRY
BEGIN CATCH
	ROLLBACK TRAN FundsTransfer;
	PRINT 'Transaction Failed...';
END CATCH


-- show all records
SELECT * 
FROM bank.CustomerData;