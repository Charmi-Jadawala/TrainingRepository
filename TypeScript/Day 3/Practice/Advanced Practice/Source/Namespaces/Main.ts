/// <reference path="Namespace.ts" />

var strUpper: string = stringFunctions.toCapital("Charmi");
console.log("String in UpperCase: " + strUpper);

var strLen: number = stringFunctions.strLength("Charmi");
console.log("String Length: " + strLen);


// var strLower: string = stringFunctions.toSmall("CHARMI");        //Gives Error because can't use toSmall Function as it is not exported from Namespace!
// console.log("String in Lowercase: " + strLower);