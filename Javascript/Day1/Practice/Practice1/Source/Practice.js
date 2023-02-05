/*--------------------------------------- Practice Exercise-1 -----------------------------------------------*/
var input1 = parseInt(prompt("Enter number-1: "));
var input2 = parseInt(prompt("Enter number-2: "));
var input3 = parseInt(prompt("Enter number-3: "));
const sumarray = [input1, input2, input3];
var max;
var sum = 0;

if(isNaN(input1) || isNaN(input2) || isNaN(input3)){
    max = "Please enter Numbers only...";
}
else{
    max_num();
}

function max_num(){
    if(input1 > input2){
        if(input1 > input3){
            max = input1;
        }
        else{
            max = input3;
        }
    }
    else{
        if(input2 > input3){
            max = input2;
        }
        else{
            max = input3;
        }
    }
}

function addition(){
    for(let i of sumarray){
        if(i > 40){
            sum += i;
        }
    }
    return sum;
}

document.getElementById("max-num").innerHTML ="Maximum of 3 numbers is : " + max;

document.getElementById("sum").innerHTML ="Sum of numbers greater than 40 is : " + addition();


/*--------------------------------------- Practice Exercise-2 -----------------------------------------------*/
const cities = ["Ahmedabad", "Baroda", "Surat", "Rajkot", "Kutch"];
var citylist = "";

cities.forEach(cityfun);

function cityfun(value){
    citylist += value + "\n";
}

