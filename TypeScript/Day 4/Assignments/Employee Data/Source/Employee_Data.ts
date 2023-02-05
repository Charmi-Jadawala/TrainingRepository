//Employee Array
const empData: {ID: number, Name: string, City: string, DOJ: Date}[] = [
    {
        ID: 1617,
        Name: "Charmi",
        City: "Ahmedabad",
        DOJ: new Date("Jan 1, 2022")
    },
    {
        ID: 1308,
        Name: "Lily",
        City: "Mumbai",
        DOJ: new Date("Sep 16, 2021")
    },
    {
        ID: 2071,
        Name: "John",
        City: "Rajkot",
        DOJ: new Date("Mar 9, 2020")
    },
    {
        ID: 1114,
        Name: "Bob",
        City: "Surat",
        DOJ: new Date("Aug 28, 2013")
    },
    {
        ID: 3436,
        Name: "Susan",
        City: "Mumbai",
        DOJ: new Date("Jul 22, 2018")
    }
]

//Printing the Employee Array
console.log("Employee Array:");
console.log(empData);

//Searching the Employee with ID.
console.log("\n\nEmployee Search with ID:");
let searchId: number = 2071;
empData.forEach(emp => {
    if(emp.ID == searchId){
        console.log(`Employee ID: ${emp.ID}   Employee Name: ${emp.Name}    City: ${emp.City}    Date of Joining: ${emp.DOJ.toDateString()}`);
    } 
});

//Searching the Employees who have joined after year 2020
console.log("\nEmployees who joined after 2020:");
empData.forEach(emp => {
    if(emp.DOJ.getFullYear() > 2020){
        console.log(`Employee ID: ${emp.ID}   Employee Name: ${emp.Name}    City: ${emp.City}    Date of Joining: ${emp.DOJ.toDateString()}`); 
    }
});

//Searchong the Employees who have joined after year 2020 and stays in Mumbai city
console.log("\nEmployees who joined after 2020 & stays in Mumbai:");
empData.forEach(emp => {
    if(emp.DOJ.getFullYear() > 2020 && emp.City == "Mumbai"){
        console.log(`Employee ID: ${emp.ID}   Employee Name: ${emp.Name}    City: ${emp.City}    Date of Joining: ${emp.DOJ.toDateString()}`); 
    }
});