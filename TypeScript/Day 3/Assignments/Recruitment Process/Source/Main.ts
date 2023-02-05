import { Person } from "./Person";
import { Applicant, Applicants, applicantList } from "./Applicant";
import { Vacancy, Vacancies, vacancyList } from "./Vacancy";
import { Interview, Interviews, interviewList } from "./Interview";
import { HiredPerson, HiredPersons, hiredPersonList } from "./Hired";

//--------------------------------------------------- Applicants -------------------------------------------------------

//Create an Applicant Object
var applicant = new Applicants();

//View all Applicants
applicant.viewAllApplicants();

//Create a new Applicant
applicant.createApplicant({
    id: 4,
    name: "Susan",
    email: "susan@gmail.com",
    appliedDate: "2022-03-12",
    vacancyId: 2
});

//View all Applicants
applicant.viewAllApplicants();

//Trying to access invalid Vacancy ID - 7
applicant.createApplicant({
    id: 1,
    name: "Charmi",
    email: "charmi@gmail.com",
    appliedDate: "2021-07-22",
    vacancyId: 7
}); 

//View particular Applicant using id
applicant.viewApplicant(3); 

//View particular Applicant using Invalid ID
applicant.viewApplicant(7); 



//--------------------------------------------------- Vacancy -------------------------------------------------------

//Create a Vacancy Object
var vacancy = new Vacancies();

//View all Vacancies
vacancy.viewAllVacancies();

//Create a new Vacancy
vacancy.createVacancy({
    id: 4,
    deptName: ".NET",
    designation: "Project Manager",
    vacancyNo: 3
});

//View all Vacancies
vacancy.viewAllVacancies();

//Decreasing Vacancy No. in Vacancy id - 1
vacancy.decreaseVacancyNo(1);

//View particular Vacancy using id
vacancy.viewVacancy(1);

//Increasing Vacancy No. in Vacancy id - 4
vacancy.increaseVacancyNo(4);

//View all Vacancies
vacancy.viewAllVacancies();

//View particular Vacancy using Invalid ID
vacancy.viewVacancy(6); 



//--------------------------------------------------- Interview -------------------------------------------------------

//Create an Interview Object
var interview = new Interviews();

//Create a new Interview
interview.createInterview({
    id: 2,
    applicantId: 2,
    date: "04-04-2022",
    time: "1:00 PM"
});

//View all Interviews
interview.viewAllInterviews();

//Add Interview Result in Interview id - 1
interview.updateInterviewResult(1, true);

//View particular Interview using id
interview.viewInterview(2);

//Add Interview Result in Interview id - 2
interview.updateInterviewResult(2, false);

//View all Interviews
interview.viewAllInterviews();

//View particular Interview using Invalid ID
interview.viewInterview(6);



//--------------------------------------------------- Hired Employee -------------------------------------------------------
//Create a HiredPerson Object
var hiredEmployee = new HiredPersons();

//Create a new HiredPerson
hiredEmployee.createHiredPerson({
    id: 1,
    name: "Charmi Jadawala",
    email: "charmi@gmail.com",
    hiredDate: "06-04-2022",
    salary: 30000
});

//View all Hired Employees
hiredEmployee.viewAllHiredPersons();

//View particular Hired Employee using id
hiredEmployee.viewHiredPerson(1);

//View particular Hired Employee using Invalid ID
hiredEmployee.viewHiredPerson(4);