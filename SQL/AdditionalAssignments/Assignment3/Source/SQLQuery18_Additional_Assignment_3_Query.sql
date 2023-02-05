-- use an existing database
USE SqlModuleDB;


-- Modification requirement: Change value of 'student.name' with any other value for student.studentid = 3.
UPDATE student.Student
SET name = 'Jennifer'
WHERE studentid = 3;
        
-- Modification requirement: Update all "student" records to append character " A." as the middle name for "student.name" field.
UPDATE student.Student
SET name = name + ' ' + 'A.';

-- Modification requirement: Update all "productprice" records to add 25.00 in "price" field.
UPDATE student.ProductPrice
SET price = price + 25;

-- Modification requirement: Update "product" table to add "A" in 'product.name' where related 'product.code = AB'.
UPDATE student.Product
SET name = name + ' ' + 'A'
WHERE productid IN (SELECT productid FROM student.ProductPrice WHERE code = 'AB');

-- Modification requirement: Update all "studentpresent" records to add 2 in 'studentpresent.present' where related 'studenthours.hours >= 8'.
UPDATE student.StudentPresent
SET present = present + 2
WHERE studentid IN (SELECT studentid FROM student.StudentHours WHERE hours >= 8);


-- Delete requirement: Remove a record from "product" table where 'product.productid = 5'
DELETE FROM student.Product
WHERE productid = 5;
        
-- Delete requirement: Remove all "student" records where the 'student.name' starts with character "A".
DELETE FROM student.Student
WHERE name LIKE 'A%';
        
-- Delete requirement: Remove all "studentdetails" record where related 'studenthours.hours <= 3'.
DELETE FROM student.StudentDetail
WHERE studentid IN (SELECT studentid FROM student.StudentHours WHERE Hours <= 3);


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
