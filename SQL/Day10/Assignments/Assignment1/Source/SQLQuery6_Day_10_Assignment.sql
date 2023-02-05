-- use an existing database
USE SqlModuleDB;


-- declare variables used in cursor
DECLARE 
  @Salary int;

-- declare a cursor
DECLARE IncSalary CURSOR
FOR 
SELECT Salary FROM Employee
FOR UPDATE OF Salary;

-- open the cursor 
OPEN IncSalary

-- fetch a row from the cursor into one or more variables
FETCH NEXT FROM IncSalary INTO 
	@Salary

WHILE @@FETCH_STATUS = 0
    BEGIN
		SET NOCOUNT ON;
		UPDATE Employee 
		SET Salary = CASE   
			WHEN @Salary >= 30000 AND @Salary < 40000 THEN Salary + 5000
			WHEN @Salary >= 40000 AND @Salary < 55000 THEN Salary + 7000
			WHEN @Salary >= 55000 AND @Salary < 65000 THEN Salary + 9000
			ELSE @Salary 
		END
		WHERE CURRENT OF IncSalary;

        FETCH NEXT FROM IncSalary INTO 
            @Salary;
    END;

-- close the cursor
CLOSE IncSalary;

-- deallocate the cursor
DEALLOCATE IncSalary;


-- show all records
SELECT *
FROM Employee;