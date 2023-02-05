-- String Functions: ASCII
SELECT ASCII('Charmi') AS [Ascii Value];
 

-- String Functions: CHAR
SELECT CHAR(77) AS [Char Value];


-- String Functions: CHARINDEX
SELECT CHARINDEX('r', 'Charmi') AS [Matched Position]; 


-- String Functions: CONCAT
SELECT CONCAT('Charmi', ' ', 'Jadawala') AS [Concatenated String]; 

SELECT CONCAT_WS('_', 'Hello', 'World') AS [Concatenated String]; 

SELECT CONCAT_WS(' ', 'Good', 'Morning', 'Charmi', '!!!') AS [Concatenated String]; 


-- String Functions: FORMAT
SELECT FORMAT(1234567890, '###-###-####') AS [Formated String]; 


-- String Functions: LEFT
SELECT LEFT('Charmi Jadawala', 6) AS [Extracted String]; 


-- String Functions: LEN
SELECT LEN('RadixWeb Software Services Pvt. Ltd.') AS [String Length]; 


-- String Functions: LOWER 
SELECT LOWER('RADIXWEB') AS LowerCase; 


-- String Functions: LTRIM
SELECT LTRIM('     Hello World...') AS [Left Trimmed String]; 


-- String Functions: PATINDEX
SELECT PATINDEX('%ar%', 'Charmi') AS [Matched Position]; 


-- String Functions: REPLACE
SELECT REPLACE('SQL Learning', 'SQL', 'SSMS') AS [Replaced String];  


-- String Functions: RTRIM
SELECT RTRIM('Hello World...     ') AS [Right Trimmed String]; 


-- String Functions: SOUNDEX
SELECT SOUNDEX('Plane'), SOUNDEX('Plain'),  SOUNDEX('Plan'), SOUNDEX('Pan') AS [Soundex Value]; 


-- String Functions: SPACE
SELECT 'Hello' + SPACE(10) + 'World' AS [Spaced String]; 


-- String Functions: STR
SELECT STR(300) AS String; 

SELECT STR(300.06) AS String;

SELECT STR(300.066667, 6, 2) AS String; 


-- String Functions: STUFF
SELECT STUFF('SQL Tutorial', 1, 3, 'SSMS') AS [Stuffed String]; 

SELECT STUFF('RadixWeb ', 9, 1, ' Software Services Pvt. Ltd.') AS [Stuffed String]; 


-- String Functions: SUBSTRING
SELECT SUBSTRING('SQL Tutorial', 1, 3) AS [Extracted String]; 


-- String Functions: TRIM
SELECT TRIM('     SQL Tutorial!     ') AS [Trimmed String];

SELECT TRIM('#! ' FROM '    #SQL Tutorial!    ') AS [Trimmed String]; 


-- String Functions: REPLICATE
SELECT REPLICATE('Good Morning	', 4) AS [Replication];


-- String Functions: REVERSE
SELECT REVERSE('Hello') AS [Reversed String]; 


-- String Functions: RIGHT
SELECT RIGHT('Charmi Jadawala', 8) AS [Extracted String]; 
