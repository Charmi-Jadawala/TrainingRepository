//-------------------------------------- Different ways of importing Modules --------------------------------------------

/* 
import { age, Employee } from "./Module";
let empObj = new Employee("Steve Jobs", 1);
empObj.displayEmployee(); 
*/


/* 
import { Employee } from "./Module";
let empObj = new Employee("Steve Jobs", 1);
empObj.displayEmployee(); 
*/


/* 
import { Employee as Emp} from "./Module";
let empObj = new Emp("Steve Jobs", 1);
empObj.displayEmployee();  
*/


import * as Emp from "./Module";
let empObj = new Emp.Employee("Steve Jobs", 1);
empObj.displayEmployee(); 


//console.log(companyName);     //Gives error as companyName is not Exported!