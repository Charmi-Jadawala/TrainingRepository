-----------------------------------------------------------------------------------------------------------------------------
-- 1. GetCourseMaterial
-----------------------------------------------------------------------------------------------------------------------------
DROP PROCEDURE IF EXISTS GetCourseMaterial
GO
CREATE PROCEDURE GetCourseMaterial
	@WeekNo int,
	@CourseId int
AS
BEGIN
	SET NOCOUNT ON;

	SELECT 1 AS Id, ISNULL((SELECT M.ModuleId, M.ModuleName, 
	(SELECT T.TopicId, T.TopicTitle, T.Type, T.Duration, T.Description FROM Topics T 
		WHERE T.ModuleId = M.ModuleId FOR JSON PATH) As Topics
	FROM Modules M
	WHERE WeekNo = @WeekNo AND CourseId = @CourseId FOR JSON PATH), '[]') AS JsonData;	
END
GO

EXEC GetCourseMaterial 1, 4;
GO



-----------------------------------------------------------------------------------------------------------------------------
-- 2. GetWeeks
-----------------------------------------------------------------------------------------------------------------------------
DROP PROCEDURE IF EXISTS GetWeeks
GO
CREATE PROCEDURE GetWeeks
	@CourseId int
AS
BEGIN
	SET NOCOUNT ON;	
	SELECT 2 AS Id, 
	CONVERT(varchar(2), 
			(SELECT COUNT(*) FROM 
				(SELECT DISTINCT WeekNo AS NoOfWeeks FROM Modules WHERE CourseId = @CourseId) temp)) AS JsonData;
END
GO

--SELECT COUNT(*) FROM (SELECT DISTINCT WeekNo AS NoOfWeeks FROM Modules WHERE CourseId = 4) temp;

EXEC GetWeeks 3;



-----------------------------------------------------------------------------------------------------------------------------
-- 3. GetDuration
-----------------------------------------------------------------------------------------------------------------------------
DROP PROCEDURE IF EXISTS GetDuration
GO
CREATE PROCEDURE GetDuration
AS
BEGIN
	SET NOCOUNT ON;	
	SELECT AOV.AOVId AS Id, AOV.AOVName AS JsonData FROM ApplicationObject AO JOIN ApplicationObjectValues AOV ON AO.AOId = AOV.AOId 
	WHERE AO.AOName = 'Duration';
END
GO

EXEC GetDuration;



-----------------------------------------------------------------------------------------------------------------------------
-- 4. GetLevel
-----------------------------------------------------------------------------------------------------------------------------
DROP PROCEDURE IF EXISTS GetLevel
GO
CREATE PROCEDURE GetLevel
AS
BEGIN
	SET NOCOUNT ON;	

	SELECT AOV.AOVId AS Id, AOV.AOVName AS JsonData FROM ApplicationObject AO JOIN ApplicationObjectValues AOV ON AO.AOId = AOV.AOId 
	WHERE AO.AOName = 'Level';
END
GO

EXEC GetLevel;



-----------------------------------------------------------------------------------------------------------------------------
-- 5. GetLanguage
-----------------------------------------------------------------------------------------------------------------------------
DROP PROCEDURE IF EXISTS GetLanguage
GO
CREATE PROCEDURE GetLanguage
AS
BEGIN
	SET NOCOUNT ON;	

	SELECT AOV.AOVId AS Id, AOV.AOVName AS JsonData FROM ApplicationObject AO JOIN ApplicationObjectValues AOV ON AO.AOId = AOV.AOId 
	WHERE AO.AOName = 'Language';
END
GO

EXEC GetLanguage;



-----------------------------------------------------------------------------------------------------------------------------
-- 6. GetSkill
-----------------------------------------------------------------------------------------------------------------------------
DROP PROCEDURE IF EXISTS GetSkill
GO
CREATE PROCEDURE GetSkill
AS
BEGIN
	SET NOCOUNT ON;	

	SELECT AOV.AOVId AS Id, AOV.AOVName AS JsonData FROM ApplicationObject AO JOIN ApplicationObjectValues AOV ON AO.AOId = AOV.AOId 
	WHERE AO.AOName = 'Skill';
END
GO

EXEC GetSkill;



-----------------------------------------------------------------------------------------------------------------------------
-- 7. GetCourseByCategory
-----------------------------------------------------------------------------------------------------------------------------
DROP PROCEDURE IF EXISTS GetCourseByCategory
GO
CREATE PROCEDURE GetCourseByCategory
	@CategoryId int
AS
BEGIN
	SET NOCOUNT ON;	

	SELECT 3 AS Id , ISNULL((SELECT C.*, 
	(SELECT A.AOVName FROM SkillMapping S JOIN ApplicationObjectValues A ON S.SkillId = A.AOVId 
		WHERE S.CourseId = C.CourseId FOR JSON PATH) AS Skills
	FROM Course C JOIN Category CA ON C.CategoryId = CA.CategoryId 
		WHERE CA.CategoryId = @CategoryId FOR JSON PATH), '[]') AS JsonData;
END
GO

EXEC GetCourseByCategory 6;



-----------------------------------------------------------------------------------------------------------------------------
-- 8. GetCourseBySubCategory
-----------------------------------------------------------------------------------------------------------------------------
DROP PROCEDURE IF EXISTS GetCourseBySubCategory
GO
CREATE PROCEDURE GetCourseBySubCategory
	@SubCategoryId int
AS
BEGIN
	SET NOCOUNT ON;	

	SELECT 4 AS Id , ISNULL((SELECT C.*, 
	(SELECT A.AOVName FROM SkillMapping S JOIN ApplicationObjectValues A ON S.SkillId = A.AOVId 
		WHERE S.CourseId = C.CourseId FOR JSON PATH) AS Skills
	FROM Course C JOIN SubCategory SC ON C.SubCategoryId = SC.SubCategoryId
		WHERE SC.SubCategoryId = @SubCategoryId FOR JSON PATH), '[]') AS JsonData;
END
GO

--SELECT C.*, (SELECT A.AOVName FROM SkillMapping S JOIN ApplicationObjectValues A ON S.SkillId = A.AOVId WHERE S.CourseId = C.CourseId FOR JSON PATH) AS Skills
--FROM Course C JOIN Category CA ON C.CategoryId = CA.CategoryId WHERE CA.CategoryId = 6;

--SELECT C.CourseId, 
--(SELECT A.AOVName FROM SkillMapping S JOIN ApplicationObjectValues A ON S.SkillId = A.AOVId WHERE S.CourseId = C.CourseId FOR JSON PATH)
--FROM Course C;

EXEC GetCourseBySubCategory 37;



-----------------------------------------------------------------------------------------------------------------------------
-- 9. GetCourseDetails
-----------------------------------------------------------------------------------------------------------------------------
DROP PROCEDURE IF EXISTS GetCourseDetails
GO
CREATE PROCEDURE GetCourseDetails
		@CourseId int
AS
BEGIN
	SET NOCOUNT ON;	

	SELECT 5 AS Id,  ISNULL((SELECT C.CourseId, 
		C.CourseName, 
		(SELECT CT.CategoryName FROM Category CT WHERE CT.CategoryId = C.CategoryId) AS Category,
		(SELECT SCT.SubCategoryName FROM SubCategory SCT WHERE SCT.SubCategoryId = C.SubCategoryId) AS SubCategory,
		(SELECT AOV.AOVName FROM ApplicationObjectValues AOV WHERE AOVId = C.DurationId) AS Duration,
		C.OfferredBy,
		C.OfferredByAbout,
		(SELECT AOV.AOVName FROM ApplicationObjectValues AOV WHERE AOVId = C.LanguageId) AS [Language],
		C.Price, C.CreatedDate, C.ModifiedDate,
		(SELECT AOV.AOVName FROM ApplicationObjectValues AOV WHERE AOVId = C.LevelId) AS [Level],
		C.CourseImage, C.CoverImage, 
		C.Stars, C.Ratings, C.AlreadyEnrolled,
		C.About
	FROM Course C WHERE C.CourseId = @CourseId FOR JSON PATH), '[]') AS JsonData;
END
GO

EXEC GetCourseDetails 4;



-----------------------------------------------------------------------------------------------------------------------------
-- 10. GetInstructors
-----------------------------------------------------------------------------------------------------------------------------
DROP PROCEDURE IF EXISTS GetInstructors
GO
CREATE PROCEDURE GetInstructors
		@CourseId int
AS
BEGIN
	SET NOCOUNT ON;	

	SELECT 6 AS Id, 
	ISNULL((SELECT I.* FROM Instructor I JOIN InstructorMapping M ON I.InstructorId = M.InstructorId 
		WHERE M.CourseId = @CourseId FOR JSON PATH), '[]') AS JsonData;
END
GO

EXEC GetInstructors 4;



-----------------------------------------------------------------------------------------------------------------------------
-- 11. GetUserCourses
-----------------------------------------------------------------------------------------------------------------------------
DROP PROCEDURE IF EXISTS GetUserCourses
GO
CREATE PROCEDURE GetUserCourses
		@UserId int
AS
BEGIN
	SET NOCOUNT ON;	

	SELECT 7 AS Id, 
	 ISNULL((SELECT C.CourseId, C.OfferredBy, C.CourseName, C.CoverImage, U.PurchasedDate, U.Status
		FROM Course C JOIN UserCourses U ON C.CourseId = U.CourseId 
		WHERE U.UserId = @UserId AND C.Status = 1 FOR JSON PATH),'[]') AS JsonData;
END
GO

EXEC GetUserCourses 1;



-----------------------------------------------------------------------------------------------------------------------------
-- 12. GetCourseSkills
-----------------------------------------------------------------------------------------------------------------------------
DROP PROCEDURE IF EXISTS GetCourseSkills
GO
CREATE PROCEDURE GetCourseSkills
		@CourseId int
AS
BEGIN
	SET NOCOUNT ON;	

	SELECT 8 AS Id, 
		 ISNULL((SELECT (SELECT AOV.AOVName FROM ApplicationObjectValues AOV WHERE AOV.AOVId = M.SkillId) AS Skills 
					FROM SkillMapping M WHERE M.CourseId = @CourseId FOR JSON PATH), '[]') AS JsonData;
END
GO

EXEC GetCourseSkills 3;


