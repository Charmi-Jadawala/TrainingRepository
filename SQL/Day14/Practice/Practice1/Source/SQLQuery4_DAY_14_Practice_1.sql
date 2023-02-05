-- use an existing database
USE AdventureWorks2019;

CREATE TRIGGER HumanResources.HRShiftTrigger
ON HumanResources.Shift
FOR INSERT
AS
BEGIN
	DECLARE @ModifiedDate datetime

	SELECT @ModifiedDate = ModifiedDate FROM inserted;

	IF(@ModifiedDate != GETDATE())
		BEGIN
			PRINT 'Insert Failed... Please check the ModifiedDate.'
			ROLLBACK TRANSACTION
		END
	ELSE
		PRINT 'Record Inserted Successfully...'
END

-- insert records into Shift
INSERT INTO HumanResources.Shift VALUES
('Half Day', '07:00:00.0000000', '12:00:00.0000000', '2008-04-30 00:00:00.000');

INSERT INTO HumanResources.Shift VALUES
('Half Day', '07:00:00.0000000', '12:00:00.0000000', GETDATE());

-- show all records
SELECT *
FROM HumanResources.Shift;