-- use an existing database
USE SqlModuleDB;


-- declare variables used in cursor
DECLARE 
    @employee_name VARCHAR(MAX), 
    @salary   DECIMAL;

-- declare a cursor
DECLARE cursor_employee CURSOR
FOR 
	SELECT FirstName, Salary FROM Employees;

-- open the cursor 
OPEN cursor_employee;

-- fetch a row from the cursor into one or more variables
FETCH NEXT FROM cursor_employee INTO 
    @employee_name, 
    @salary;

WHILE @@FETCH_STATUS = 0
    BEGIN
        PRINT @employee_name + ' - ' + CAST(@salary AS varchar);
        FETCH NEXT FROM cursor_employee INTO 
            @employee_name, 
            @salary;
    END;

-- close the cursor
CLOSE cursor_employee;

-- deallocate the cursor
DEALLOCATE cursor_employee;


-- show all records
SELECT *
FROM Employees;