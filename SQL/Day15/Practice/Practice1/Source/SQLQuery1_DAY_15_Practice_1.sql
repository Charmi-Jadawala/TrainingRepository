-- use an existing database
USE SqlModuleDB;


-- implicit transaction-1: INSERT
SET IMPLICIT_TRANSACTIONS ON;

INSERT INTO school.Course VALUES
('Bootstrap', 4000);

INSERT INTO school.CourseEnrolled VALUES
(2, 9);

COMMIT TRANSACTION;
SET IMPLICIT_TRANSACTIONS OFF;


-- implicit transaction-2: SELECT
SET IMPLICIT_TRANSACTIONS ON;

SELECT *
FROM school.Student;

SELECT *
FROM school.Course;

SELECT *
FROM school.CourseEnrolled;

COMMIT TRANSACTION;
SET IMPLICIT_TRANSACTIONS OFF;