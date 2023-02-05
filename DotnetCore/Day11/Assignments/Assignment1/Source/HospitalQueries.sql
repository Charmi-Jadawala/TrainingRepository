CREATE DATABASE Hospital;

CREATE TABLE Department
(
	DeptId int PRIMARY KEY identity(1, 1),
	Name varchar(40) NOT NULL
);


ALTER TABLE Doctor
ADD FOREIGN KEY (DeptId) REFERENCES Department(DeptId); 


CREATE TABLE Medicines
(
	MedicineId int PRIMARY KEY identity(1, 1),
	Name varchar(40) NOT NULL
);


CREATE TABLE Time
(
	TimeId int PRIMARY KEY identity(1, 1),
	Time varchar(20) NOT NULL
);


CREATE TABLE Assistant
(
	AsstId int PRIMARY KEY identity(1, 1),
	FirstName varchar(20) NOT NULL,
	LastName varchar(30) NOT NULL,
	ShiftTime varchar(20) CHECK(ShiftTime IN('Morning', 'Night')),
	Designation varchar(30) NOT NULL,
	JoiningDate date NOT NULL,
	Salary decimal(8,2)
);


CREATE TABLE Patient
(
	PatientId int PRIMARY KEY identity(1, 1),
	FirstName varchar(20) NOT NULL,
	LastName varchar(30) NOT NULL,
	Gender char(1) CHECK(Gender IN('M', 'F', 'O')) NOT NULL,
	Age int CHECK(Age >= 0) NOT NULL
);


CREATE TABLE TreatedBy
(
	Id int PRIMARY KEY identity(1, 1),
	PatientId int NOT NULL FOREIGN KEY REFERENCES Patient(PatientId),
	DocId int NOT NULL FOREIGN KEY REFERENCES Doctor(DocId),
	AsstId int NOT NULL FOREIGN KEY REFERENCES Assistant(AsstId)
);


CREATE TABLE Dosage
(
	Id int PRIMARY KEY identity(1, 1),
	PatientId int NOT NULL FOREIGN KEY REFERENCES Patient(PatientId),
	MedicineId int NOT NULL FOREIGN KEY REFERENCES Medicines(MedicineId),
	TimeId int NOT NULL FOREIGN KEY REFERENCES Time(TimeId),
	Dose int NOT NULL
);

CREATE TABLE AsstDepartment
(
	Id int PRIMARY KEY identity(1, 1),
	DeptId int NOT NULL FOREIGN KEY REFERENCES Department(DeptId),
	AsstId int NOT NULL FOREIGN KEY REFERENCES Assistant(AsstId)
);



SELECT *
FROM Assistant;
	
SELECT *
FROM AsstDepartment;

SELECT *
FROM Department;

SELECT *
FROM Doctor;

SELECT *
FROM Dosage;

SELECT *
FROM Medicines;

SELECT *
FROM Patient;

SELECT *
FROM Time;

SELECT *
FROM TreatedBy;



ALTER PROCEDURE PatientReport
	@DoctorName varchar(30)
AS
BEGIN
SELECT  P.PatientId, P.FirstName + ' ' + P.LastName AS Name, P.Age, P.Gender
FROM TreatedBy T
JOIN Doctor D ON T.DocId = D.DocId
JOIN Patient P ON T.PatientId = P.PatientId
WHERE D.FirstName = @DoctorName;
END

EXEC PatientReport scott



CREATE PROCEDURE PatientMedicines
	@PatientName varchar(30)
AS
BEGIN
SELECT M.Name, T.Time, D.Dose
FROM Dosage D
JOIN Patient P ON D.PatientId = P.PatientId
JOIN Medicines M ON D.MedicineId = M.MedicineId
JOIN Time T ON D.TimeId = T.TimeId
WHERE P.FirstName = @PatientName;
END

EXEC PatientMedicines 'Shruti'



CREATE PROCEDURE SummaryReport
AS
BEGIN
	SELECT P.PatientId, P.FirstName + ' ' + P.LastName AS PatientName,
		   D.DocId, D.FirstName + ' ' + D.LastName AS DoctorName,
		   De.DeptName AS DocDept,
		   A.AsstId, A.FirstName + ' ' + A.LastName AS AssistantName,
		   ADe.DeptName AS AsstDept,
		   M.Name AS MedicineName, 
		   Ti.Time,
		   Do.Dose
	FROM Patient P 
	LEFT JOIN TreatedBy T ON P.PatientId = T.PatientId
	LEFT JOIN Doctor D ON T.DocId = D.DocId
	LEFT JOIN Department De ON D.DeptId = De.DeptId
	LEFT JOIN Assistant A ON T.AsstId = A.AsstId
	LEFT JOIN AsstDepartment AD ON A.AsstId = AD.AsstId
	LEFT JOIN Department ADe ON AD.DeptId = ADe.DeptId
	LEFT JOIN Dosage Do ON T.PatientId = Do.PatientId
	LEFT JOIN Medicines M ON Do.MedicineId = M.MedicineId
	LEFT JOIN Time Ti ON Do.TimeId = Ti.TimeId;
END

EXEC SummaryReport




--SELECT P.PatientId, P.FirstName + ' ' + P.LastName AS PatientName,
--	   D.DocId, D.FirstName + ' ' + D.LastName AS DoctorName,
--	   A.AsstId, A.FirstName + ' ' + A.LastName AS AssistantName,
--	    M.Name, 
--	   Ti.Time,
--	   Do.Dose
--FROM TreatedBy T 
--LEFT JOIN Patient P ON T.PatientId = P.PatientId
--LEFT JOIN Doctor D ON T.DocId = D.DocId
--LEFT JOIN Assistant A ON T.AsstId = A.AsstId
--LEFT JOIN Dosage Do ON T.PatientId = Do.PatientId
--LEFT JOIN Medicines M ON Do.MedicineId = M.MedicineId
--LEFT JOIN Time Ti ON Do.TimeId = Ti.TimeId







