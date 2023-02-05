-- use an existing database
USE AdventureWorks2019;

ALTER TRIGGER HumanResources.trgInsertShift
ON HumanResources.Shift
FOR INSERT
AS
BEGIN
	SET NOCOUNT ON;

	DECLARE @ModifiedDate datetime

	SELECT @ModifiedDate = ModifiedDate FROM inserted;

	IF(@ModifiedDate != GETDATE())
		BEGIN
			RAISERROR('Insert Failed... Please check the ModifiedDate.', 10, 1)
			ROLLBACK TRANSACTION
		END
	ELSE
		PRINT 'Record Inserted Successfully...'
END

-- insert records into Shift
INSERT INTO HumanResources.Shift VALUES
('Second Half', '02:00:00.0000000', '06:00:00.0000000', '2008-04-30 00:00:00.000');

INSERT INTO HumanResources.Shift VALUES
('Second Half', '02:00:00.0000000', '06:00:00.0000000', GETDATE());

-- show all records
SELECT *
FROM HumanResources.Shift;