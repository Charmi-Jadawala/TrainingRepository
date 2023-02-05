//------------------------------------ TS DataTypes : Static --> Built-In ------------------------------------------
//------------- Number -------------- 
var num1: number = 16;
var num2: number = 22;
var sum: number = num1 + num2;

console.log(sum + "\n");


//------------- String -------------- 
var str1: string = "Hello";
var str2: string = "World.";

console.log(str1 + " " + str2 + "\n");

//------------- Boolean -------------- //------------- Template String -------------- 
var bolTrue: boolean = true;
var bolFalse: boolean = false;

console.log(`True boolean value: ${bolTrue} & False boolean value: ${bolFalse}\n`);


//------------- Void -------------- 
var voidNull: void = null;
var voidUndefined: void = undefined;

console.log(`A variable of type VOID can be assigned only either of the 2 values: ${voidNull} and ${voidUndefined}\n`);


//------------- Null -------------- 
var varNull: number = null;

console.log(`A variable of type NULL can be assigned only 1 value: ${varNull}\n`);


//------------------------------------ TS DataTypes : Static --> User-Defined ------------------------------------------
//------------- Array --------------
var cities: string[] = ["Ahmedabad", "Baroda", "Rajkot", "Surat"];

var fruits: Array<string> = ["Strawberry", "Cherry", "Mango"];

console.log(`City Array: ${cities} \nFruit Array: ${fruits}\n`);


//------------- Any --------------
var valAny: any = "Hello";
console.log(valAny, typeof valAny);

valAny = true;
console.log(valAny, typeof valAny);

valAny = 36;
console.log(valAny, typeof valAny);

//------------- Function -------------- 
function addition(n1: number, n2: number){
    return n1 + n2;
}
var sum: number = addition(6, 7);
console.log("\n" + sum);

