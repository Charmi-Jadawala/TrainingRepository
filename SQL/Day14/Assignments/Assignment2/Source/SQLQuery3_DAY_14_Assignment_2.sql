-- Create an insert trigger on FeePayment, 
-- record should be updated in RemainingAmt Field of the Student Table for the respective student.
CREATE TRIGGER school.FeePaymentTrigger
ON school.FeePayment
AFTER INSERT
AS
BEGIN
	SET NOCOUNT ON;

	UPDATE school.Student 
	SET school.Student.RemainingAmt -= I.AmountPaid 
	FROM school.Student S
	JOIN inserted I
	ON S.StudentID = I.StudentID
	WHERE S.StudentID = I.StudentID;
END

-- insert records into FeePayment
INSERT INTO school.FeePayment VALUES
(2, 12000, DEFAULT);

INSERT INTO school.FeePayment VALUES
(5, 2000, DEFAULT);


-- show all records
SELECT *
FROM school.Student;

SELECT *
FROM school.Course;

SELECT *
FROM school.CourseEnrolled;

SELECT *
FROM school.FeePayment;