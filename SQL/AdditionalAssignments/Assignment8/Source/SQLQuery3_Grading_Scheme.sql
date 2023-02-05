CREATE SCHEMA assign;


CREATE TABLE assign.Student
(
	StudentID int identity(1, 1) PRIMARY KEY,
	Name varchar(255) NOT NULL,
	Address varchar(255) NOT NULL,
	Board varchar(20) NOT NULL
);

CREATE TABLE assign.Marks
(
	StudentID int FOREIGN KEY REFERENCES assign.Student(StudentID),
	Science decimal(4,2) NOT NULL,
	Maths decimal(4,2) NOT NULL,
	English decimal(4,2) NOT NULL,
	Average decimal(4, 2) NOT NULL,
	Grade varchar(2)
);


-- =============================================
-- Author:		Charmi
-- Create date: 29-06-2022
-- Description:	Create a Store Procedure which will accept the json and update the grades according to new scheme
-- =============================================
ALTER PROCEDURE gspGradingScheme
	@gradingScheme nvarchar(max)
AS
BEGIN
	--SET NOCOUNT ON;

	UPDATE assign.Marks
	SET Average = (Science * (CONVERT(decimal(4,2), JSON_Value(@gradingScheme, '$.Weightage.Sci')))/100) + 
						(Maths * (CONVERT(decimal(4,2), JSON_Value(@gradingScheme, '$.Weightage.Maths')))/100) + 
							(English * (CONVERT(decimal(4,2), JSON_Value(@gradingScheme, '$.Weightage.Eng')))/100);

	IF JSON_Value(@gradingScheme, '$.Board') = 'CBSE'
		BEGIN
			UPDATE assign.Marks
			SET Grade = CASE 
				WHEN Average >= 95 THEN 'A+'
				WHEN Average >= 85 THEN 'A'
				WHEN Average >= 75 THEN 'B'
				WHEN Average >= 50 THEN 'C'
				ELSE 'D'
			END
		END
	ELSE
		BEGIN
			UPDATE assign.Marks
			SET Grade = CASE
				WHEN Average >= 80 THEN 'A+'
				WHEN Average >= 60 THEN 'A'
				WHEN Average >= 50 THEN 'B'
				WHEN Average >= 35 THEN 'C'
				ELSE 'D'
			END
		END
END
GO


DECLARE @GradingScheme nvarchar(max);

SET @GradingScheme = N'{
	"Board": "State",
	"Weightage": {
		"Sci": 40,
		"Maths": 40,
		"Eng": 20
	}
}';

EXEC gspGradingScheme @GradingScheme;


SELECT *
FROM assign.Student;

SELECT *
FROM assign.Marks;



