import { Person } from "./Person";

export interface HiredPerson extends Person{
   hiredDate: string;
   salary: number;
}

export class HiredPersons{
    createHiredPerson(inp: HiredPerson){
        hiredPersonList.push(inp);
    }

    viewAllHiredPersons(){
        console.log("Hired Employees: ");
        hiredPersonList.forEach(hiredPerson => {
            console.log(`ID: ${hiredPerson.id}, Name: ${hiredPerson.name}, Email: ${hiredPerson.email}, Date of Hiring: ${hiredPerson.hiredDate}, Salary: ${hiredPerson.salary}`);
        });
        console.log();
    }

    viewHiredPerson(inpId: number){
        for (const index of hiredPersonList){
            if(index.id == inpId){
                console.log(`ID: ${index.id}, Name: ${index.name}, Email: ${index.email}, Date of Hiring: ${index.hiredDate}, Salary: ${index.salary}\n`);
                return;
            }
        }
        console.log("Invalid Employee ID: " + inpId + "\n");
    }
}

export var hiredPersonList: HiredPerson[] = [];