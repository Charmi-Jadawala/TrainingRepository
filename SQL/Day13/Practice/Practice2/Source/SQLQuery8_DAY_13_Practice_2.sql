-- =============================================
-- Author:		Charmi
-- Create date: 01-07-2022
-- Description: Create a function to get all the employees of two departments
--				which is passed as input to the function.
-- =============================================
CREATE FUNCTION udfGetEmployees
(	
		@dept1 varchar(10),
		@dept2 varchar(10)
)
RETURNS TABLE 
AS
RETURN 
(
	SELECT EmployeeID, FirstName + ' ' + LastName AS FullName, JobId, ManagerID, DepartmentID
	FROM Employees
	WHERE JobId = @dept1 OR JobId = @dept2
)
GO

SELECT * FROM udfGetEmployees('PU_CLERK', 'PU_MAN');


-- show all records
SELECT * 
FROM Employees;
