-- use an existing database
USE SqlModuleDB;


-- Display following details for each student: Name, Standard, Gender.
SELECT S.name, D.standard, D.gender AS Sex
FROM student.Student S
JOIN student.StudentDetail D
ON S.studentid = D.studentid
ORDER BY S.name;

    
-- Find SUM of student hours.
SELECT H.studentid, SUM(H.hours) AS SumOfHours
FROM student.StudentHours H
GROUP BY H.studentid;

-- Find Average Present of each student.
SELECT P.studentid, AVG(P.present) AS AvgOfPresent
FROM student.StudentPresent P
GROUP BY P.studentid;

-- Find Minimum present among all students.
SELECT MIN(P.present) AS MinimumPresent
FROM student.StudentPresent P;

-- Find Maximum present among all students.
SELECT MAX(P.present) AS MaximumPresent
FROM student.StudentPresent P;


-- Display fields like Name, Date, Hours from "studenthours" table where Date should be in following format: DD/MM/YY
SELECT S.name, CONVERT(varchar, H.date, 103), SUM(H.hours) AS TotalHours
FROM student.Student S
JOIN student.StudentHours H
ON S.studentid = H.studentid
GROUP BY S.name, H.date, H.studentid;

-- Display fields like Name, Date, Hours from "studenthours" table where Date should be in following format: MM/DD/YY
SELECT S.name, CONVERT(varchar, H.date, 101), SUM(H.hours) AS TotalHours
FROM student.Student S
JOIN student.StudentHours H
ON S.studentid = H.studentid
GROUP BY S.name, H.date, H.studentid;

-- Display fields like Name, Date, Hours from "studenthours" table where Date should be in following format: YYYY-MM-DD
SELECT S.name, H.date, SUM(H.hours) AS TotalHours
FROM student.Student S
JOIN student.StudentHours H
ON S.studentid = H.studentid
GROUP BY S.name, H.date, H.studentid;

-- Display fields like Name, Date, Hours from "studenthours" table where Date should be in following format: MM/DD Day 
SELECT S.name, 
CONVERT(varchar, DATEPART(MM, H.date)) + '/' + CONVERT(varchar,DATEPART(DD, H.date)) + ' ' + DATENAME(WEEKDAY, H.date) AS date, 
SUM(H.hours) AS TotalHours
FROM student.Student S
JOIN student.StudentHours H
ON S.studentid = H.studentid
GROUP BY S.name, H.date, H.studentid;


SELECT *
FROM student.Student;

SELECT *
FROM student.StudentDetail;

SELECT *
FROM student.StudentPresent;

SELECT *
FROM student.StudentHours;
