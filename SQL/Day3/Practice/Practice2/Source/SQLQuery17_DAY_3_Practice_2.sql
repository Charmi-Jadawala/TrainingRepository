-- Date Functions: Dateadd
SELECT DATEADD(year, 1, GETDATE()) AS DateAdd;

SELECT DATEADD(month, 2, '2022/09/16') AS DateAdd; 

SELECT DATEADD(month, -2, GETDATE()) AS DateAdd; 


-- Date Functions: Datename
SELECT DATENAME(year, '2017/08/9') AS DatePartString; 
SELECT DATENAME(yy, GETDATE()) AS DatePartString; 
SELECT DATENAME(month, '2017/08/9') AS DatePartString; 
SELECT DATENAME(hour, '2017/08/9 08:36') AS DatePartString; 
SELECT DATENAME(minute, '2017/08/9 08:36') AS DatePartString; 


-- Date Functions: Getdate
SELECT GETDATE() AS Today; 


-- Date Functions: Day
SELECT DAY('2017/08/2') AS DayOfMonth; 
SELECT DAY('2017/08/13 09:08') AS DayOfMonth; 
