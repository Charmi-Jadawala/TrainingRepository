CREATE TABLE Details
(
  DetailsId INT identity(1, 1) PRIMARY KEY,
  AddressLine1 VARCHAR(30),
  AddressLine2 VARCHAR(30),
  AddressLine3 VARCHAR(30),
  CitizenshipId INT,
  CitizenshipLegislationCode CHAR(2),
  CitizenshipStatus VARCHAR(20),
  CitizenshipToDate DATETIME,
  City VARCHAR(20),
  CorrespondenceLanguage VARCHAR(20),
  Country VARCHAR(20),
  CreationDate DATETIME,
  DateOfBirth DATETIME,
  DisplayName VARCHAR(10),
  DriversLicenseExpirationDate DATETIME,
  DriversLicenseId VARCHAR(6),
  DriversLicenseIssuingCountry VARCHAR(20),
  EffectiveStartDate DATETIME,
  Ethnicity VARCHAR(15),
  Gender VARCHAR(6) CHECK (Gender IN('Male','Female')),
  HireDate DATETIME,
  HomeFaxAreaCode VARCHAR(5),
  HomeFaxCountryCode VARCHAR(6),
  HomeFaxExtension VARCHAR(6),
  HomeFaxLegislationCode VARCHAR(6),
  HomeFaxNumber  VARCHAR(15),
  HomePhoneAreaCode VARCHAR(10),
  HomePhoneCountryCode VARCHAR(6),
  HomePhoneExtension  VARCHAR(6),
  HomePhoneLegislationCode VARCHAR(10),
  HomePhoneNumber VARCHAR(10),
  Honors VARCHAR(4),
  LastUpdateDate DATETIME,
  LegalEntityId INT,
  LicenseNumber VARCHAR(15),
  MaritalStatus VARCHAR(15),
  MiddleName VARCHAR(15),
  MilitaryVetStatus VARCHAR(3),
  NameSuffix VARCHAR(10),
  NationalId VARCHAR(7),
  NationalIdCountry VARCHAR(4)
);

INSERT INTO Details
VALUES('D-45 Gandhi houses','near kasturba flats','sabarmati ashram',1,
'A1','Indian',15/08/1947,'Ahmedabad','Gujarati','India',02/08/1850,
02/08/1900,'bapu',18/03/1920,'123456','India',12/01/1900,'Indo-Aryan',
'Male',11/11/1921,'A4552','I15545','.pdf','D554','1225455','A455522',
'012','48485','4542200','7990165272','Mr',12/11/1911,54811,'FFEE0215454',
'Married','Karamchand','No','bapu','264644','99');


CREATE TABLE Employees
(
  EmployeeId INT identity(1, 1) PRIMARY KEY,
  FirstName VARCHAR(20),
  LastName VARCHAR(20),
  DetailID INT FOREIGN KEY REFERENCES Details(DetailsId)
);

INSERT INTO Employees
VALUES('Mohandas','Gandhi',1);

INSERT INTO Employees(FirstName,LastName)
VALUES('Jawahar lal','Nehru'),
('Chandra Shekhar','Azad'),
('Manohsd','Karamchand'),
('Mangal','Pandey'),
('M S','Dhoni'),
('Virat','Kohli');

CREATE TABLE Links
(
 LinkId INT identity(1, 1) PRIMARY KEY,
 LinkName VARCHAR(25)
);

INSERT INTO Links
VALUES('Sardar Patel'),
('bhagat singh'),
('sukhdev'),
('ambedkar doctor');

CREATE TABLE Assignment
(
  Id INT identity(1, 1) PRIMARY KEY,
  ActionCode VARCHAR(2),
  ActionReasonCode VARCHAR(2),
  ActualTerminationDate DATETIME,
  AssignmentCategory VARCHAR(10),
  AssignmentId INT,
  AssignmentName VARCHAR(20),
  AssignmentNumber INT,
  AssignmentProjectedEndDate DATETIME,
  AssignmentStatus VARCHAR(10),
  AssignmentStatusTypeId VARCHAR(8),
  BusinessUnitId VARCHAR(8),
  CreationDate DATETIME,
  DefaultExpenseAccount VARCHAR(3) CHECK (DefaultExpenseAccount IN('Yes','No')),
  DepartmentId VARCHAR(8),
  EffectiveEndDate DATETIME,
  EffectiveStartDate DATETIME,
  EndTime VARCHAR(8),
  Frequency INT,
  FullPartTime VARCHAR(3) CHECK (FullPartTime IN('Yes','No')),
  GradeId VARCHAR(8),
  GradeLadderId VARCHAR(8),
  JobId VARCHAR(8),
  LastUpdateDate DATETIME,
  LegalEntityId VARCHAR(8),
  LocationId VARCHAR(8),
  ManagerAssignmentId VARCHAR(8),
  ManagerId VARCHAR(8),
  assignmentDFF NVARCHAR(30),
  assignmentExtraInformation NVARCHAR(30),
  empreps NVARCHAR(30)
);

CREATE TABLE AssignmentLinks
(
	Id int identity(1, 1) PRIMARY KEY,
	AssignmentId INT FOREIGN KEY REFERENCES Assignment(Id),
	LinkId INT FOREIGN KEY REFERENCES Links(LinkID)
);

CREATE TABLE EmployeeAssignments
(
	Id int identity(1, 1) PRIMARY KEY,
	AssignmentId INT FOREIGN KEY REFERENCES Assignment(Id),
	EmployeeId INT FOREIGN KEY REFERENCES Employees(EmployeeId)
);


INSERT INTO Assignment
VALUES('1','1',01/01/1940,'Freedom',1,'Salt Movement',
111,19/03/1941,'Completed','11223344','11223344',19/01/1941,
'Yes','11223344',19/02/1941,11/02/1941,'16:40:12',15,'Yes',
'11223344','11223344','11223344',19/03/1941,'11223344',
'11223344','11223344','11223344',NULL,NULL,NULL);

INSERT INTO Assignment
VALUES('2','2',01/01/1940,'Freedom',2,'Save Tree Movement',
222,19/03/1941,'Completed','55667788','55667788',19/01/1941,
'Yes','55667788',19/02/1941,11/02/1941,'16:40:12',15,'Yes',
'55667788','55667788','55667788',19/03/1941,'55667788',
'55667788','55667788','55667788',NULL,NULL,NULL);

INSERT INTO Assignment
VALUES('1','1',01/01/1940,'Freedom',1,'Dandi-March',
111,19/03/1941,'Completed','11223344','11223344',19/01/1941,
'Yes','11223344',19/02/1941,11/02/1941,'16:40:12',15,'Yes',
'11223344','11223344','11223344',19/03/1941,'11223344',
'11223344','11223344','11223344',NULL,NULL,NULL);

INSERT INTO Assignment(ActionCode)
VALUES(3),
(5);

INSERT INTO Assignment
VALUES('1','1',01/01/1940,'Freedom',1,'Salt Movement',
111,19/03/1941,'Completed','11223344','11223344',19/01/1941,
'Yes','11223344',19/02/1941,11/02/1941,'16:40:12',15,'Yes',
'11223344','11223344','11223344',19/03/1941,'11223344',
'11223344','11223344','11223344',NULL,NULL,NULL);

INSERT INTO AssignmentLinks VALUES 
(1, 1),
(2, 1),
(3, 1),
(6, 1);

INSERT INTO EmployeeAssignments VALUES 
(1, 1),
(2, 1),
(3, 6),
(4, 6),
(5, 6),
(6, 7);

SELECT * FROM Assignment;

SELECT * FROM Links;

SELECT * FROM Employees;

SELECT * FROM Details;

SELECT * FROM AssignmentLinks;

SELECT * FROM EmployeeAssignments;