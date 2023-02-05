import { RouteID } from "./Route";

//enum for Standard
export enum standard{
    std_1 = "1st",
    std_2 = "2nd",
    std_3 = "3rd"
}

//Student Interface
export interface Student extends RouteID{
    studentID: number;
    studentName: string;
    standard: standard;
}

//Students Class
export class Students{
    //Create
    createStudent(inp: Student){
        for(let i of studentList){
            if(i.studentID == inp.studentID){
                console.log("Entered StudentID already exists!");
                return;
            }
        }
        studentList.push(inp);
    }

    //Read
    viewAllStudents(){
        console.log("List of Students:");
        studentList.forEach(student => {
            console.log(`StudentID: ${student.studentID}, StudentName: ${student.studentName}, Standard: ${student.standard}, RouteID: ${student.routeID}\n`);
        });
        console.log("");
    }

    //Count the students standard wise
    countStudentStandardwise(inpStd: standard){
        let standardCount = 0;
        for(let i of studentList){
            if(inpStd == i.standard){
                standardCount ++;
            }
        }
        console.log(`No. of students in ${inpStd} standard: ${standardCount}\n`);
    }

    //Count the students route wise
    countStudentRoutewise(inpRouteID: number){
        let routeCount = 0;
        for(let i of studentList){
            if(inpRouteID == i.routeID){
                routeCount ++;
            }
        }
        console.log(`No. of students with RouteID-${inpRouteID}: ${routeCount}\n`);
    }
}

//StudentList of type Student
export var studentList: Student[] = [
    {
        studentID: 1,
        studentName: "Charmi",
        standard: standard.std_1,
        routeID: 1
    },
    {
        studentID: 2,
        studentName: "Lily",
        standard: standard.std_1,
        routeID: 2
    }
];


