-- use an existing Database
USE SqlModuleDB;


-- display the current date in the following format. Sample output : 12:00 AM Sep 5, 2014
SELECT FORMAT(GETDATE(), 'hh:mm tt') +
	SPACE(1) + 
	LEFT(DATENAME(MONTH, GETDATE()), 3) +
	SPACE(1)+ 
	DATENAME(DAY, GETDATE()) + 
	',' + SPACE(1) +
	DATENAME(YEAR, GETDATE())
AS TODAY;

