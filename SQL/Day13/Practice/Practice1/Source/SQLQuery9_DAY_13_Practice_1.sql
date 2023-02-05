-- =============================================
-- Author:		Charmi
-- Create date: 01-07-2022
-- Description: Calculate the incremented salary of the employee using following condition 
--				Salary between 30000 and 40000 — 5000 hike 
--				Salary between 40000 and 55000 — 7000 hike 
--				Salary between 55000 and 65000 — 9000 hike
-- =============================================
ALTER FUNCTION udfIncSalary 
(
	@inpSalary int
)
RETURNS int
AS
BEGIN
	DECLARE @incSalary int;

	SELECT @incSalary = CASE
					WHEN @inpSalary BETWEEN 30000 AND 40000 THEN @inpSalary + 5000
					WHEN @inpSalary BETWEEN 40000 AND 55000 THEN @inpSalary + 7000
					WHEN @inpSalary BETWEEN 55000 AND 65000 THEN @inpSalary + 9000
					ELSE @inpSalary
				 END;

	RETURN @incSalary;
END
GO

-- update records
UPDATE Employee
SET Salary = dbo.udfIncSalary(Salary);

-- show all records
SELECT * 
FROM Employee;
