//Store 5 employees’ data in one array 
let empArray: { ID: number, 
    FirstName: string, 
    LastName: string, 
    Address: {FlatNo: number, Society: string, City: string, State: string}, 
    Salary: number }[] = [
    {   
        ID: 30, 
        FirstName: "John", 
        LastName: "Doe", 
        Address: {FlatNo: 104, Society: "Surat Park", City: "Surat", State: "Gujarat"}, 
        Salary: 28000 
    },
    { 
        ID: 22, 
        FirstName: "Gopi", 
        LastName: "Jadawala", 
        Address: {FlatNo: 606, Society: "Ahmedabad Park", City: "Ahmedabad", State: "Gujarat"}, 
        Salary: 40000 
    },
    { 
        ID: 16, 
        FirstName: "Charmi", 
        LastName: "Jadawala", 
        Address: {FlatNo: 1001, Society: "Ahmedabad Park", City: "Ahmedabad", State: "Gujarat"}, 
        Salary: 30000 
    },
    { 
        ID: 9, 
        FirstName: "Bob", 
        LastName: "Smith", 
        Address: {FlatNo: 403, Society: "Jamnagar Park", City: "Jamnagar", State: "Gujarat"}, 
        Salary: 32000 
    },
    { 
        ID: 24, 
        FirstName: "Susan", 
        LastName: "Mathew", 
        Address: {FlatNo: 2004, Society: "Kutch Park", City: "Kutch", State: "Gujarat"}, 
        Salary: 20000 
    }
];

console.log(empArray);

var emp1 = empArray[0];
console.log(`\n\n1st Employee Details:\nEmployee ID: ${emp1.ID}\nName: ${emp1.FirstName} ${emp1.LastName}\nAddress: ${emp1.Address.FlatNo}, ${emp1.Address.Society}, ${emp1.Address.City}, ${emp1.Address.State}\nSalary: ${emp1.Salary}`);


//Searching by Index No.
var searchIndex: number = 1;
for(let i = 0; i < empArray.length; i ++){
    if(i == searchIndex){
        console.log(`\n\nSearch Index No.: ${i}     Employee Name: ${empArray[i].FirstName} ${empArray[i].LastName}`);
    }
}


//Searching by Employee ID.
var searchID: number = 30;
for(let j = 0; j < empArray.length; j ++){
    if(searchID == empArray[j].ID){
        console.log(`\n\nSearch Employee ID: ${searchID}     Employee Name: ${empArray[j].FirstName} ${empArray[j].LastName}`);
    }
}


//Insert the employee
var empIns = { ID: 13, FirstName: "Vipasha", LastName: "Vaghela", Address: {FlatNo: 702, Society: "Ahmedabad Park", City: "Ahmedabad", State: "Gujarat"}, Salary: 42000 };
var newArrLength: number = empArray.push(empIns);
console.log(`\n\nNew Array Length: ${newArrLength} \nNew Array(employee added): `);
console.log(empArray);


//Delete the employee
var empDeleted = empArray.shift();
console.log(`\n\nDeleted Employee Details:`);
console.log(empDeleted);
console.log(`\nNew Array(employee deleted): `);
console.log(empArray);


//Array Concatenation
let empArray2: { ID: number, FirstName: string, LastName: string, Address: {FlatNo: number, Society: string, City: string, State: string}, Salary: number }[] = [
    { 
        ID: 30, 
        FirstName: "John", 
        LastName: "Doe", 
        Address: {FlatNo: 104, Society: "Surat Park", City: "Surat", State: "Gujarat"}, 
        Salary: 28000 
    },
    { ID: 12, 
        FirstName: "Lindsay", 
        LastName: "Marsh", 
        Address: {FlatNo: 303, Society: "Baroda Park", City: "Baroda", State: "Gujarat"}, 
        Salary: 24000 
    },
];
let newArray = empArray.concat(empArray2);
console.log(`\n\nConcatenated Employee Array:`);
console.log(newArray);


//Display Array List
var display: any = "";
for(let k = 0; k < newArray.length; k ++){
    display += `\n\nEmployee ID: ${newArray[k].ID}\nEmployee Name: ${newArray[k].FirstName} ${newArray[k].LastName}\nAddress: ${newArray[k].Address.FlatNo}, ${newArray[k].Address.Society}, ${newArray[k].Address.City}, ${newArray[k].Address.State}\nPF: ${(newArray[k].Salary * 0.10).toFixed(2)}\nSalary: ${newArray[k].Salary.toFixed(2)}\n\n`;
}
console.log(`\n\nAll Employee Details: ${display}`);