Magic Brain School Transport System:-


Project Entry Point: --> Main.ts

1. Main.ts Imports Modules from: --> Student.ts, Bus.ts, Route.ts files

--> For A list of Bus, PickupDrop, Route Type we can perform following operations:
    -Create an array detailedList of type Bus & PickupDrop & Route (here & stands for intersection)
    -Add the data in the detailedList using for loop and es6 spread operator
    -Print the detailedList in console using forEach as mentioned in the question

--> For RouteDetail List we can perform following operations: 
    -Create an interface routeDetails which extends Student from Student.ts
    -Create an array routeDetailList of type routeDetails
    -Print the routeDetailList in console using forEach
    -Decreasing Vacancy No. using Vacancy id
    -Increasing Vacancy No. using Vacancy id 
    -View particular Vacancy using id

--> For counting the students standard wise we can perform following operations: 
    -Create a Students object
    -Call a function countStudentStandardwise() by passing an argument (standard)

--> For counting the students route wise we can perform following operations: 
    -Create a Students object
    -Call a function countStudentRoutewise() by passing an argument (routeID)

--> For finding the Area where there's no student to pick up
    -Declare a variable flag of type string or number and intialize its value to 0
    -Use 2 for loops for comparision
    -And finally console log the resultant area


2. Student.ts Imports --> RouteID from Route.ts
   Student.ts Exports --> enum standard, interface Student,  class Students, array studentList

--> Create a string enum standard

--> interface Student includes:
    -extents interface RouteID from Route.ts
    -studentID of type number
    -studentName of type string
    -standard of type enum standard

--> class Applicants includes:
    -createStudent() with a single (inp) parameter of type Student 
    -viewAllStudents() without any parameters
    -countStudentStandardwise() with a single (inpStd) parameter of type standard
    -countStudentRoutewise with a single (inpRouteID) parameter of type number

--> studentList[] is an array of type Student


3. Bus.ts Imports --> RouteID from Route.ts
   Bus.ts Exports --> interface Bus, array busList, interface PickupDrop, array pickupDropList

--> interface Bus includes:
    -extents interface RouteID from Route.ts
    -busID of type number
    -busName of type string
    -driverName of type string

--> busList[] is an array of type Bus

--> interface PickupDrop includes:
    -extents interface RouteID from Route.ts
    -areaID of type number
    -areaName of type string

--> pickupDropList[] is an array of type PickupDrop


4. Route.ts Exports --> interface RouteID, interface Route, array routeList, interface RouteDetail

--> interface RouteID includes:
    -routeID of type number

--> interface Route includes:
    -extents interface RouteID from Route.ts
    -routeName of type string

--> busList[] is an array of type Bus

--> routeList[] is an array of type Route

--> interface RouteDetail includes:
    -extents interface RouteID from Route.ts
    -busID of type number
    -areaID of type number
