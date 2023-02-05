DROP TRIGGER IF EXISTS setCategoryStatus
GO
CREATE TRIGGER setCategoryStatus 
ON Category 
AFTER UPDATE
AS 
BEGIN
	UPDATE Category
	SET Status = 1
	WHERE Status IS NULL; 
END
GO



DROP TRIGGER IF EXISTS setSubCategoryStatus
GO
CREATE  TRIGGER setSubCategoryStatus
ON SubCategory 
AFTER UPDATE
AS 
BEGIN
	UPDATE SubCategory
	SET Status = 1
	WHERE Status IS NULL; 
END
GO



DROP TRIGGER IF EXISTS setCourseStatus
GO
CREATE  TRIGGER setCourseStatus
ON Course 
AFTER UPDATE
AS 
BEGIN
	UPDATE Course
	SET Status = 1
	WHERE Status IS NULL; 
END
GO



DROP TRIGGER IF EXISTS setModuleStatus
GO
CREATE TRIGGER setModuleStatus
ON Modules 
AFTER UPDATE
AS 
BEGIN
	UPDATE Modules
	SET Status = 1
	WHERE Status IS NULL; 
END
GO



DROP TRIGGER IF EXISTS setTopicStatus
GO
CREATE  TRIGGER setTopicStatus
ON Topics 
AFTER UPDATE
AS 
BEGIN
	UPDATE Topics
	SET Status = 1
	WHERE Status IS NULL; 
END
GO