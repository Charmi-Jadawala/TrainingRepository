import { Person } from "./Person";
import { vacancyList } from "./Vacancy";

export interface Applicant extends Person{
    appliedDate: string;
    vacancyId: number;
}

export class Applicants{
    createApplicant(inp: Applicant): void{
        var isExist = vacancyList.filter((current) => {return current.id == inp.vacancyId});
        if(isExist.length < 1){
            console.log("Invalid Vacancy ID\n");
        }
        else{
            applicantList.push(inp);
        }
    }

    viewAllApplicants(){
        console.log("Applicants: ");
        applicantList.forEach(applicant => {
            console.log(`ID: ${applicant.id}, Name: ${applicant.name}, Email: ${applicant.email}, Date of Apply: ${applicant.appliedDate}, Vacancy ID: ${applicant.vacancyId}`);            
        });
        console.log();
    }

    viewApplicant(inpId: number){
        for (const index of applicantList){
            if(index.id == inpId){
                console.log(`ID: ${index.id}, Name: ${index.name}, Email: ${index.email}, Date of Apply: ${index.appliedDate}, Vacancy ID: ${index.vacancyId}\n`);           
                return;
            }
        }
        console.log("Invalid Applicant ID: " + inpId + "\n"); 
    }
}

export var applicantList: Applicant[] = [
    {
        id: 1,
        name: "Charmi",
        email: "charmi@gmail.com",
        appliedDate: "2021-07-22",
        vacancyId: 3
    },
    {
        id: 2,
        name: "Gopi",
        email: "gopi@gmail.com",
        appliedDate: "2021-09-16",
        vacancyId: 1
    },
    {
        id: 3,
        name: "Sita",
        email: "sita@gmail.com",
        appliedDate: "2021-08-09",
        vacancyId: 2
    }
]