import { standard, Student, studentList, Students } from "./Student";
import { Bus, PickupDrop, busList, pickupDropList } from "./Bus";
import { RouteID, Route, RouteDetail, routeList } from "./Route";



//A list of Bus, PickupDrop, Route Type
//Declaring & Initalizing the list
var detailedList: (Bus & PickupDrop & Route)[] = [];

//Adding the data in the list using spread operator
for(let i = 0; i < busList.length; i ++){
    detailedList[i] = {...busList[i], ...pickupDropList[i], ...routeList[i]};
}

//Printing the list in console using forEach
console.log("DetailedList (Bus, PickupDrop, Route Type):");
detailedList.forEach(value => {
    console.log(`BusID: ${value.busID}, BusName: ${value.busName}, DriverName: ${value.driverName}, AreaID: ${value.areaName}, RouteID: ${value.routeID}, RouteName: ${value.routeName}\n`);
});
console.log("");



//routeDetails Interface
interface routeDetails extends Student{
    routeName: string,
    driverName: string,
    areaName: string
}

//routeDetailList
var routeDetailList: routeDetails[] = [
    {
        studentID: 1,
        studentName: "Charmi",
        standard: standard.std_1,
        routeID: 1,
        routeName: "Bopal-SouthBopal-Ghuma",
        driverName: "Shyambhai",
        areaName: "Bopal"
    }
];

//Printing the list in console using forEach
console.log("RouteDetail List:");
routeDetailList.forEach(detail => {
    console.log(`StudentID: ${detail.studentID}, StudentName: ${detail.studentName}, Standard: ${detail.standard}, RouteName: ${detail.routeName}, DriverName: ${detail.driverName}, AreaName: ${detail.areaName}\n`);
});
console.log("");



//Creating a Students object
var myStudent = new Students();

//Adding data
myStudent.createStudent({
    studentID: 3,
    studentName: "Susan",
    standard: standard.std_2,
    routeID: 1
});

//Printing the list in console 
myStudent.viewAllStudents();

//Count the students standard wise
myStudent.countStudentStandardwise(standard.std_1);
myStudent.countStudentStandardwise(standard.std_2);
myStudent.countStudentStandardwise(standard.std_3);
console.log("");

//Count the students route wise
myStudent.countStudentRoutewise(1);
myStudent.countStudentRoutewise(2);
myStudent.countStudentRoutewise(3);
console.log("");



//Finding the Area where there's no student to pick up
var flag: number | string = 0;
for(let i of pickupDropList){
    for(let j of studentList){
        if(i.routeID == j.routeID){
            flag = 0;
        }
        else{
            flag = i.areaName;
            break;
        }
    }
}
if(flag != 0){
    console.log(`Area in which there's no student to pick up: ${flag}`);
}