--> Q-1 Write a query which will return value '5.0' for input value of '4.1' as well as '4.8'.
SELECT CONVERT(decimal(2,1), CEILING(4.1)) AS Output;
SELECT CONVERT(decimal(2,1), CEILING(4.8)) AS Output;

--> Q-2 Write a query which will return value '4.0' for input value of '4.1' as well as '4.8'.
SELECT CONVERT(decimal(2,1), FLOOR(4.1)) AS Output;
SELECT CONVERT(decimal(2,1), FLOOR(4.8)) AS Output;

--> Q-3 What will be the output of following query: -- SELECT MOD(11,3); -- SELECT 11 % 3;
SELECT MOD(11,3); -- 'MOD' is not a recognized built-in function name.
SELECT 11 % 3 AS Output; -- 2

--> Q-4 Write a query to find 2 raise to power 3.
SELECT POWER(2, 3) AS Output;

--> Q-5 Write a query to generate random number using MS SQL function.
SELECT RAND() AS Output; 

--> Q-6 Write a query to supply seed to the function generating random number.
SELECT RAND(2) AS Output; 

--> Q-7 Write a query which will return value '4' for '3.5' and '3' for '3.4'.
SELECT CEILING(3.5) AS Output; 
SELECT FLOOR(3.4) AS Output; 

SELECT CONVERT(int, ROUND(3.5, 0)) AS Output;
SELECT CONVERT(int, ROUND(3.4, 0)) AS Output;

--> Q-8 Write a query so that output will be '15.75' for the value '15.7463847'.
SELECT CONVERT(decimal(4,2), ROUND(15.7463847, 2)) AS Output;

--> Q-9 Write a query to find square root of given value. What will be the output if the provided value is negative?
SELECT SQRT(4) AS Output; -- 2
SELECT SQRT(-4) AS Output; -- An invalid floating point operation occurred. 

--> Q-10 Write a query so that output will be '15.74' for the value '15.7463847'.
SELECT LEFT(CONVERT(varchar, 15.7463847), 5) AS Output;

--> Q-11 Write a query which will output '15.2500' for provided value '15.25'.
SELECT LEFT(CONVERT(varchar(10), 15.25) + '0000000', 7) AS Output;


-- use an existing database
USE SqlModuleDB;

-- Write a query to display all the product names with code in bracket in one column and 2 decimal significant price in second column
-- e.g. : MS Sql book (MS09210) | 10.99
SELECT N.name + ' ' + '(' + P.code + ')' AS Product, P.price AS PRICE
FROM student.Product N
JOIN student.ProductPrice P
ON N.productid = P.productid
ORDER BY N.name;
		
-- Write a query to display following information separated by comma in a single row for the students who have atleast one 'a' in their name. 
-- The column heading should be STUDENTINFO.: student name, standard, gender
SELECT CONCAT_WS(', ', S.name, D.standard, D.gender) AS STUDENTINFO
FROM student.Student S
JOIN student.StudentDetail D
ON S.studentid = D.studentid
WHERE S.name LIKE '%a%'
ORDER BY S.name;


-- show all records
SELECT *
FROM student.Student;

SELECT *
FROM student.StudentDetail;

SELECT *
FROM student.StudentPresent;

SELECT *
FROM student.StudentHours;

SELECT *
FROM student.Product;

SELECT *
FROM student.ProductPrice;
