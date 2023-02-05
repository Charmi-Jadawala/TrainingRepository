export interface Vacancy{
    id: number;
    deptName: string;
    designation: string;
    vacancyNo: number;
}

export class Vacancies{
    createVacancy(inp: Vacancy): void{
        vacancyList.push(inp);
    }

    decreaseVacancyNo(inpId: number): Vacancy{
        for (const index of vacancyList){
            if(index.id == inpId){
                index.vacancyNo -= 1;
                return index;
            }
        }
    }

    increaseVacancyNo(inpId: number): Vacancy{
        for (const index of vacancyList){
            if(index.id == inpId){
                index.vacancyNo += 1;
                return index;
            }
        }
    }

    viewAllVacancies(){
        console.log("Vacancies: ");
        vacancyList.forEach(vacancy => {
            console.log(`ID: ${vacancy.id}, Department: ${vacancy.deptName}, Designation: ${vacancy.designation}, No. of Vacancies: ${vacancy.vacancyNo}`);
        });
        console.log();
    }

    viewVacancy(inpId: number){
        for (const index of vacancyList){
            if(index.id == inpId){
                console.log(`ID: ${index.id}, Department: ${index.deptName}, Designation: ${index.designation}, No. of Vacancies: ${index.vacancyNo}\n`);
                return;
            }
        }
        console.log("Invalid Vacancy ID: " + inpId + "\n");
    }
}

export var vacancyList: Vacancy[] = [
    {
        id: 1,
        deptName: ".NET",
        designation: "Trainee Software Engineer",
        vacancyNo: 12
    },
    {
        id: 2,
        deptName: "Node/React",
        designation: "Junior Software Engineer",
        vacancyNo: 8
    },
    {
        id: 3,
        deptName: "Mobile Development",
        designation: "Senior Software Engineer",
        vacancyNo: 4
    }
]