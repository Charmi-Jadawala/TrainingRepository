-- use an existing database
USE SqlModuleDB;


-- explicit transaction
BEGIN TRAN FundsTransfer

UPDATE bank.CustomerData
SET Balance -= 60000
WHERE CustomerName = 'Steven';

UPDATE bank.CustomerData
SET Balance += 60000
WHERE CustomerName = 'Jennifer';

COMMIT TRAN FundsTransfer;


-- show all records
SELECT * 
FROM bank.CustomerData;