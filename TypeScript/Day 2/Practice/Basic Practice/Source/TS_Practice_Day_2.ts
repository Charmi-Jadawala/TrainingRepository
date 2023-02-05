//----------------------------------------------------------- Union Types ---------------------------------------------------
//-------------Simple Union Example on a variable------------------
var unionEx: number | boolean;

console.log(`unionEx --> Value: ${unionEx}  Type: ${typeof(unionEx)}`);

unionEx = 10;
console.log(`unionEx --> Value: ${unionEx}  Type: ${typeof(unionEx)}`);

unionEx = true;
console.log(`unionEx --> Value: ${unionEx}  Type: ${typeof(unionEx)}\n`);


//-----------------Union Example using a function-------------------
function display1(val: string | number | boolean){
    console.log("Value is: " + val);
    if(typeof val === "string"){
        console.log("Narrowing the union inorder to use Uncommon Methods.");
        console.log(val.toUpperCase() + "\n");
    }
} 
display1("Charmi");
display1(22);
display1(true);

function display2(val: string | string[]){
    console.log("\nValue is: " + val);
    console.log("Using Common Methods.");
    console.log("Length is: " + val.length);
} 
display2("Charmi");
display2(["Charmi", "Jadawala", "Ahmedabad"]);



//----------------------------------------------------------- Classes ---------------------------------------------------
//----------------Class without Constructor---------------
class Employee1 {
    empCode: number;
    empName: string;
}

//Creating an Object
const emp1 = new Employee1();

//Assigning Values
emp1.empCode = 1600;
emp1.empName = "John";

console.log(`\n\nClass without Constructor:     Employee Code: ${emp1.empCode}   Employee Name: ${emp1.empName}`);


//-----------------Class with Constructor------------------
class Employee2 {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
            this.empName = name;
            this.empCode = code;
    }

    getDetails(): void{
        console.log(`\nClass with Constructor & functions:     Employee Code: ${this.empCode}   Employee Name: ${this.empName}`);
    }

    getSalary(): number{
        return 30000;
    }
}

//Creating an Object
const emp2 = new Employee2(2399, "Charmi");

//Accessing Functions
emp2.getDetails();
console.log(emp2.getSalary());


//----------------------Inheritance----------------------
//Base Class
class Person{
    name: string;
    
    constructor(name: string){
        this.name = name;
    }
}

//Derived Class
class Employee3 extends Person{
    empCode: number;
    
    constructor(empcode: number, name:string){
        super(name);
        this.empCode = empcode;
    }
    
    displayName(): void{
        console.log("\nInheritance:     Name = " + this.name +  "   Employee Code = " + this.empCode);
    }
}

let emp = new Employee3(100, "Bob");
emp.displayName(); 



//----------------------------------------------------------- Enums ---------------------------------------------------
//----------------Numeric Enums---------------
enum DirectionNumeric{
    Up = 1,
    Down,
    Left,
    Right,
}
let dir1 = DirectionNumeric.Up;
let dir2 = DirectionNumeric.Right;
console.log("\n\nNumeric Enums:     " + dir1 + "  " + dir2);

//----------------String Enums---------------
enum DirectionString{
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
let dDown = DirectionString.Down;
let dLeft = DirectionString.Left;
console.log("\nString Enums:     " + dDown + "  " + dLeft);

//----------------Heterogeneous enums---------------
enum DirectionHeterogeneous{
    Up = "UP",
    Down = "DOWN",
    Left = 3,
    Right = 4,
}
let dString= DirectionHeterogeneous.Up;
let dNumber = DirectionHeterogeneous.Left;
console.log("\nHeterogeneous Enums:     " + dString + "  " + dNumber);



//----------------------------------------------------------- Functions ---------------------------------------------------
//----------------Normal Function---------------
function greeting() {
    console.log("\n\nHave a Good Day !!!");
}
greeting();

//----------------Function with Parameter and Return Type---------------    
function Sum(x: number, y: number) : number {
    return x + y;
}

console.log(`\nSum of 2 numbers from Normal Function is: ${Sum(2,3)}`);

//----------------Anonymous Function---------------
var learning = function() {
    console.log("\nHello, I'm learning TypeScript right now...");
};
learning();

//----------------Optional Parameters in a Function---------------
function optional(message: string, name?: string ) : string {
    return "\n" + message + " " + name + "!";
}
console.log(optional("Hello", "Charmi"));
console.log(optional("Good Morning"));

//----------------Default Parameters in a Function---------------
function defaultFun(message: string, name: string = "Radix") : string {
    return "\n" + message + " " + name + "!";
}
console.log(defaultFun("Hello", "Charmi"));
console.log(defaultFun("Good Morning"));
console.log(defaultFun("Hii", undefined));

//----------------Arrow Function---------------
let sumArrow = (x: number, y: number): number => {
    return x + y;
}

console.log(`\nSum of 2 numbers from Arrow Function is: ${sumArrow(10, 20)}`);

//----------------Function Overloading---------------
function overloadAdd(a:string, b:string): string;

function overloadAdd(a:number, b:number): number;

function overloadAdd(a: any, b:any): any {
    return a + b;
}

console.log(`\nFunction Overloading:    String: ${overloadAdd("Hello ", "Steve")}`);
console.log(`\nFunction Overloading:    Number: ${overloadAdd(10, 20)}\n`);
 


//----------------------------------------------------------- Interface ---------------------------------------------------
//Interface
interface IEmployee{
    empCode: number;
    name: string;
    age: number;
    getSalary:(empCode: number) => number;
}

class EmployeeClass implements IEmployee{ 
    empCode: number;
    name: string;
    age: number;

    constructor(code: number, name: string, years: number = 0) { 
        this.empCode = code;
        this.name = name;
        this.age = years;
    }

    getSalary(empCode:number):number { 
        return 40000;
    }

    getDetails(): void{
        console.log(`\nEmployee Details:     Employee Code: ${this.empCode}   Employee Name: ${this.name}   Employee Age: ${this.age}   Employee Salary: ${this.getSalary(this.empCode)}`);
    }
}

let empObj1 = new EmployeeClass(2399, "Charmi", 21);
empObj1.getDetails();

let empObj2 = new EmployeeClass(1600, "Gopi");
empObj2.getDetails();

