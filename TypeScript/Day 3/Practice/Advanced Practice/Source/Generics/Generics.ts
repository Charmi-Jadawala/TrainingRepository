//-------------------------------------------------- TypeScript Generics ---------------------------------------------
//Generic Function
function getArray<T> (items : T[]) : T[]{
    return new Array<T>().concat(items);
}

//Array of Numbers
let myNumArr = getArray<number>([100, 200, 300]);
console.log("Initial Number Array:");
console.log(myNumArr);

//Performing Push Operation
myNumArr.push(400);
console.log("\nUpdated Number Array:");
console.log(myNumArr);

//Array of String
let myStrArr = getArray<string>(["Hello", "World"]);
console.log("\nInitial String Array:");
console.log(myStrArr);

//Performing Push Operation
myStrArr.push("Learning", "TypeScript"); 
console.log("\nUpdated String Array:");
console.log(myStrArr);



//Generic Function with Multiple Types and Common Methods
function displayGeneric<T, U> (id:T, name:U): void{ 
    //Can use methods available for all types
    id.toString(); 
    name.toString(); 

    // Can't use specific methods
    //id.toFixed();  
    //name.toUpperCase(); 
    console.log(`ID: ${id} --> Type: ${typeof(id)}, Name: ${name} --> Type: ${typeof(name)}\n`);  
}

console.log("\n\nGeneric Function with Multiple Types and Common Methods:");

displayGeneric<number, string> (16, "Charmi");

displayGeneric<string, number> ("Charmi", 16);

displayGeneric<boolean, boolean> (true, false);



//Generic Interface and Class
interface IGeneric<T, U>
{
    key: T;
    val: U;
    display(key: T, val: U): void;
};

class CGeneric<T, U> implements IGeneric<T, U>
{ 
    key: T;
    val: U;

    constructor(key: T, val: U){
        this.key = key;
        this.val = val;
    }

    display(key: T, val: U): void {
        console.log(`Key = ${key} --> Type: ${typeof(key)}, val = ${val} --> Type: ${typeof(val)}\n`);   
    }
}

console.log("\nGeneric Interface and Class:");

let obj1: IGeneric<number, string> = new CGeneric(1, "John Doe");
obj1.display(1, "John Doe");

let obj2: IGeneric<string, boolean> = new CGeneric("Lindsay Marsh", true);
obj2.display("Lindsay Marsh", true);

let obj3: IGeneric<string, string> = new CGeneric("Hello", "Everyone");
obj3.display("Hello", "Everyone");