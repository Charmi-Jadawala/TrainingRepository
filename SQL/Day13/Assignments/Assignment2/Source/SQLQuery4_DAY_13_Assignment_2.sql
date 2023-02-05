-- =============================================
-- Author:		Charmi
-- Create date: 01-07-2022
-- Description: Create a scaler Function which will compute PT which will accept MontlyEarning. 
--				Criteria as below. 1 Less Than Rs. 6,000/- NIL 
--								   2 Rs. 6,000/- or Above but less than Rs. 9,000/- 80/- 
--								   3 Rs. 9,000/- or Above but less than Rs. 12,000/- 150/- 
--								   4 Rs.12,000/- or Above 200/
-- =============================================
CREATE FUNCTION computePT 
(
	@inpSalary decimal(8, 2)
)
RETURNS decimal(8, 2)
AS
BEGIN
	DECLARE @pt int;

	SELECT @pt = CASE
					WHEN @inpSalary >= 12000 THEN 200
					WHEN @inpSalary >= 9000 THEN 150
					WHEN @inpSalary >= 6000 THEN 80
					ELSE NULL
				 END;

	RETURN @pt;
END
GO

-- show computed records
SELECT EmployeeID, FirstName + ' ' + LastName AS FullName, Salary, dbo.computePT(Salary) AS PT
FROM Employees;


-- show all records
SELECT * 
FROM Employees;
