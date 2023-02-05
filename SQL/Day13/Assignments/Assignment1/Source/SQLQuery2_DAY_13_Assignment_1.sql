-- =============================================
-- Author:		<Charmi>
-- Create date: <01-07-2022>
-- Description:	<Create a scaler Function to compute PF which will accept parameter basicsalary 
--				and compute PF. PF is 12% of the basic salary.>
-- =============================================
ALTER FUNCTION computePF 
(
	@inpSalary decimal(8, 2)
)
RETURNS decimal(8, 2)
AS
BEGIN
	DECLARE @outSalary decimal(8, 2);

	SELECT @outSalary = (@inpSalary * 12)/100;

	RETURN @outSalary;
END
GO

-- show computed records
SELECT EmployeeID, FirstName + ' ' + LastName AS FullName, Salary, dbo.computePF(Salary) AS PF
FROM Employees;


-- show all records
SELECT * 
FROM Employees;
