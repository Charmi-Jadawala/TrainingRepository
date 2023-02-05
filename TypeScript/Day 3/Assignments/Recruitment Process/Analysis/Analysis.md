Project Entry Point: --> Main.ts


1. Main.ts Imports Modules from: --> Person.ts, Applicant.ts, Vacancy.ts, Interview.ts, Hired.ts files


--> For Applicants we can perform following operations:
    -Create an Applicant Object
    -Create a new Applicant
    -View all Applicants
    -View particular Applicant using id


--> For Vacancy we can perform following operations: 
    -Create a Vacancy Object
    -Create a new Vacancy
    -View all Vacancies
    -Decreasing Vacancy No. using Vacancy id
    -Increasing Vacancy No. using Vacancy id 
    -View particular Vacancy using id


--> For Interview we can perform following operations: 
    -Create an Interview Object
    -Create a new Interview
    -View all Interviews
    -View particular Interview using id
    -Add Interview Result using Interview id


--> For Hired Employee we can perform following operations: 
    -Create a HiredPerson Object
    -Create a new HiredPerson
    -View all Hired Employees
    -View particular Hired Employee using id


2. Person.ts Exports --> interface Person 

--> interface Person includes:
    -id of type number
    -name of type string
    -email of type string


3. Applicant.ts Imports --> Person from Person.ts, vacancyList from Vacancy.ts
   Applicant.ts Exports --> interface Applicant, class Applicants, array applicantList

--> interface Applicant includes:
    -extents interface Person from Person.ts
    -appliedDate of type string
    -vacancyId of type number

--> class Applicants includes:
    -createApplicant() with a single (inp) parameter of type Applicant and return type void
    -viewAllApplicants() without any parameters
    -viewApplicant() with a single (inpId) parameter of type number

--> applicantList[] is an array of type Applicant


4. Vacancy.ts Exports --> interface Vacancy, class Vacancies, array vacancyList

--> interface Vacancy includes:
    -id of type number
    -deptName of type string
    -designation of type string
    -vacancyNo of type number

--> class Vacancies includes:
    -createVacancy() with a single (inp) parameter of type Vacancy and return type void
    -decreaseVacancyNo() with a single (inpId) parameter of type number and return type Vacancy
    -increaseVacancyNo() with a single (inpId) parameter of type number and return type Vacancy
    -viewAllVacancies() without any parameters
    -viewVacancy() with a single (inpId) parameter of type number

--> vacancyList[] is an array of type Vacancy


5. Interview.ts Imports --> applicantList from Applicant
   Interview.ts Exports --> interface Interview, class Interviews, array interviewList

--> interface Interview includes:
    -id of type number
    -applicantId of type number
    -date of type string
    -time of type string
    -result of type boolean

--> class Interviews includes:
    -createInterview() with a single (inp) parameter of type Interview
    -updateInterviewResult() with 2 parameters (inpId) of type number and (result) of type boolean
    -viewAllInterviews() without any parameters
    -viewInterview() with a single (inpId) parameter of type number

--> interviewList[] is an array of type Interview


6. Hired.ts Imports --> Person from Person.ts
   Hired.ts Exports --> interface HiredPerson, class HiredPersons, array hiredPersonList

--> interface HiredPerson includes:
    -extents interface Person from Person.ts
    -hiredDate of type string
    -salary of type number

--> class HiredPersons includes:
    -createHiredPerson() with a single (inp) parameter of type HiredPerson
    -viewAllHiredPersons() without any parameters
    - viewHiredPerson() with a single (inpId) parameter of type number

--> hiredPersonList[] is an array of type HiredPerson
