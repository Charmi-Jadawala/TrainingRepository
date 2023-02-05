-- use an existing database
USE SqlModuleDB;


-- create tables
CREATE TABLE bank.CustomerData (
	CustomerID int identity(1, 1) PRIMARY KEY,
	ActNo varchar(5) NOT NULL UNIQUE,
	CustomerName varchar(20) NOT NULL,
	City varchar(20) NOT NULL,
	Balance decimal(10, 2) NOT NULL DEFAULT 0
);

CREATE TABLE bank.AmtTransactions (
	TransactionID int identity(1, 1) PRIMARY KEY,
	TransferFromActNo varchar(5) NOT NULL FOREIGN KEY REFERENCES bank.CustomerData(ActNo),
	TransferIntoActNo varchar(5) NOT NULL FOREIGN KEY REFERENCES bank.CustomerData(ActNo),
	Amount decimal(10, 2) NOT NULL,
	Status varchar(20) CHECK (Status IN ('Pending', 'Successful', 'Failed')) DEFAULT 'Pending'
);


-- create an insert trigger: Detroit Bank need to implement the transaction 
--							 whenever the amount is transferred from one account to the another account.
ALTER TRIGGER bank.trgAmountTransfer
ON bank.AmtTransactions
FOR INSERT
AS
BEGIN
	SET NOCOUNT ON;

	BEGIN TRAN AmtTransfer
		BEGIN TRY
			DECLARE @currentBalance decimal(10, 2), @transferAmt decimal(10, 2);

			SET @currentBalance = (SELECT Balance FROM bank.CustomerData 
										WHERE ActNo = (SELECT TransferFromActNo FROM inserted));

			SET @transferAmt = (SELECT Amount FROM inserted);

			IF (@currentBalance >= 5000 AND @currentBalance - 5000 >= @transferAmt)
			BEGIN
				UPDATE bank.CustomerData 
				SET Balance -= (SELECT Amount FROM inserted)
				WHERE ActNo = (SELECT TransferFromActNo FROM inserted);

				UPDATE bank.CustomerData 
				SET Balance += (SELECT Amount FROM inserted)
				WHERE ActNo = (SELECT TransferIntoActNo FROM inserted);

				UPDATE bank.AmtTransactions 
				SET Status = 'Successful'
				WHERE TransactionID = (SELECT TransactionID FROM inserted);

				COMMIT TRAN AmtTransfer;
				PRINT 'Amount transfer successful...';
			END
			ELSE
				BEGIN
					UPDATE bank.AmtTransactions 
					SET Status = 'Failed'
					WHERE TransactionID = (SELECT TransactionID FROM inserted);

					PRINT 'Insufficient Balance...';
				END
		END TRY
		BEGIN CATCH
			ROLLBACK TRAN AmtTransfer;

			UPDATE bank.AmtTransactions 
			SET Status = 'Failed'
			WHERE TransactionID = (SELECT TransactionID FROM inserted);

			PRINT 'Amount transfer failed...';
		END CATCH
END


-- perform transactions
INSERT INTO bank.AmtTransactions VALUES
('12896', '10762', 10000, DEFAULT);

INSERT INTO bank.AmtTransactions VALUES
('12896', '10762', 5000, DEFAULT);

INSERT INTO bank.AmtTransactions VALUES
('89637', '12896', 6000, DEFAULT);

INSERT INTO bank.AmtTransactions VALUES
('26983', '48556', 1000, DEFAULT);

INSERT INTO bank.AmtTransactions VALUES
('66873', '12896', 5000, DEFAULT);


-- show all records
SELECT *
FROM bank.CustomerData;

SELECT *
FROM bank.AmtTransactions;