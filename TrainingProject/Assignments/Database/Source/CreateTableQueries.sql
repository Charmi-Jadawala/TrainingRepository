--CREATE DATABASE Coursera;

CREATE TABLE Category
(
	CategoryId int identity(1, 1) PRIMARY KEY,
	CategoryName varchar(120) NOT NULL,
	CourseCount int DEFAULT 0,
	Status bit DEFAULT 1
);

CREATE TABLE SubCategory
(
	SubCategoryId int identity(1, 1) PRIMARY KEY,
	SubCategoryName varchar(160) NOT NULL,
	CategoryId int FOREIGN KEY REFERENCES Category(CategoryId) NOT NULL,
	Status bit DEFAULT 1
);

CREATE TABLE [User]
(
	UserId int identity(1, 1) PRIMARY KEY,
	FullName varchar(90) NOT NULL,
	Email nvarchar(120) NOT NULL UNIQUE,
	Password nvarchar(80) NOT NULL,
	Role varchar(40) CHECK(Role IN ('Admin', 'Learner', 'Instructor')) DEFAULT 'Learner'
);

CREATE TABLE ApplicationObject
(
	AOId int identity(1, 1) PRIMARY KEY,
	AOName varchar(70) NOT NULL
);

CREATE TABLE ApplicationObjectValues
(
	AOVId int identity(1, 1) PRIMARY KEY,
	AOId int FOREIGN KEY REFERENCES ApplicationObject(AOId) NOT NULL,
	AOVName varchar(100) NOT NULL
);

CREATE TABLE Course
(
	CourseId int identity(1, 1) PRIMARY KEY,
	CourseName varchar(120) NOT NULL,
	CategoryId int FOREIGN KEY REFERENCES Category(CategoryId) NOT NULL,
	SubCategoryId int FOREIGN KEY REFERENCES SubCategory(SubCategoryId) NOT NULL,
	DurationId int FOREIGN KEY REFERENCES ApplicationObjectValues(AOVId) NOT NULL,
	OfferredBy varchar(200) NOT NULL,
	OfferredByAbout varchar(max),
	LanguageId int FOREIGN KEY REFERENCES ApplicationObjectValues(AOVId) NOT NULL,
	Price decimal(8, 2) DEFAULT 0,
	CreatedDate date DEFAULT GETDATE(),
	ModifiedDate date DEFAULT GETDATE(),
	LevelId int FOREIGN KEY REFERENCES ApplicationObjectValues(AOVId) NOT NULL,
	CourseImage nvarchar(max) NULL,
	CoverImage nvarchar(max) NULL,
	Stars decimal(2, 1) DEFAULT 0.0,
	Ratings int DEFAULT 0,
	AlreadyEnrolled int DEFAULT 0,
	About varchar(max),
	Status bit DEFAULT 1
);

CREATE TABLE Instructor
(
	InstructorId int identity(1, 1) PRIMARY KEY,
	InstructorName varchar(120) NOT NULL,
	Designation varchar(140),
	Specialization varchar(140),
	Stars decimal(2, 1) DEFAULT 0.0,
	Ratings int DEFAULT 0,
	Learners int  DEFAULT 0,
	CourseCount int DEFAULT 1,
);

CREATE TABLE InstructorMapping
(
	MappingId int identity(1, 1) PRIMARY KEY,
	InstructorId int FOREIGN KEY REFERENCES Instructor(InstructorId) NOT NULL,
	CourseId int FOREIGN KEY REFERENCES Course(CourseId) NOT NULL
);

CREATE TABLE SkillMapping
(
	MappingId int identity(1, 1) PRIMARY KEY,
	SkillId int FOREIGN KEY REFERENCES ApplicationObjectValues(AOVId) NOT NULL,
	CourseId int FOREIGN KEY REFERENCES Course(CourseId) NOT NULL
);

CREATE TABLE Modules
(
	ModuleId int identity(1, 1) PRIMARY KEY,
	WeekNo int NOT NULL,
	ModuleName varchar(300) NOT NULL,
	CourseId int FOREIGN KEY REFERENCES Course(CourseId) NOT NULL,
	Status bit DEFAULT 1
);

CREATE TABLE Topics
(
	TopicId int identity(1, 1) PRIMARY KEY,
	TopicTitle varchar(300) NOT NULL,
	Type varchar(30) CHECK(Type IN ('Reading', 'Video')) NOT NULL, 
	Duration int NOT NULL,
	ModuleId int FOREIGN KEY REFERENCES Modules(ModuleId),
	Description nvarchar(max) NOT NULL,
	Status bit DEFAULT 1
);

CREATE TABLE UserCourses
(
	CUId int identity(1, 1) PRIMARY KEY,
	UserId int FOREIGN KEY REFERENCES [User](UserId) NOT NULL,
	CourseId int FOREIGN KEY REFERENCES Course(CourseId) NOT NULL,
	PurchasedDate date DEFAULT GETDATE(),
	Status varchar(40) CHECK(Status IN('Completed', 'Inprogress')) DEFAULT 'Inprogress'
);


--CREATE TABLE UserPaymentDetails
--(
--	UPId int identity(1, 1) PRIMARY KEY,
--	UserId int FOREIGN KEY REFERENCES [User](UserId) NOT NULL,
--	NameOnCard varchar(120) NOT NULL,
--	CardNumber varchar(19) NOT NULL,
--	ExpirationDate date NOT NULL,
--	CVV varchar(3) NOT NULL,
--	CountryName varchar(60) NOT NULL DEFAULT 'India'
--);


