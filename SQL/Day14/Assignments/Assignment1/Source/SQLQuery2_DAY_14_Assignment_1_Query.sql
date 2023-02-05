-- Create an insert trigger on CourseEnrolled Table, 
-- record should be updated in TotalFees Field on the Student table for the respective student. 
ALTER TRIGGER school.CourseEnrolledTrigger
ON school.CourseEnrolled
FOR INSERT
AS
BEGIN
	SET NOCOUNT ON

	UPDATE school.Student 
	SET TotalFees += (SELECT C.TotalFees FROM school.Course C JOIN inserted I ON C.CourseID = I.CourseID WHERE C.CourseID = I.CourseID)
	WHERE StudentID = (SELECT StudentID FROM inserted);
END

-- insert records into CourseEnrolled
INSERT INTO school.CourseEnrolled VALUES
(6, 8);

INSERT INTO school.CourseEnrolled VALUES
(4, 7);


-- show all records
SELECT *
FROM school.Student;

SELECT *
FROM school.Course;

SELECT *
FROM school.CourseEnrolled;

SELECT *
FROM school.FeePayment;

