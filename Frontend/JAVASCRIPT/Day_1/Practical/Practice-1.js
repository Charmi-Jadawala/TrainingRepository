/*--------------------------------------- Changing CSS using JS-----------------------------------------------*/
function fun2(){
    document.getElementById("demo-4").style.fontSize="30px";
}


/*--------------------------------------- JS Arithmetic-----------------------------------------------*/
var x, y, add, sub, mul, divi;
x = 6;
y = 7;
add = x + y;
sub = x - y;
mul = x * y;
divi = y / x;
document.getElementById("demo-5").innerHTML = "Addition is" + " " + add;
document.write("Subtraction is: ", sub + "<br /><br />");
console.log(divi);


/*--------------------------------------- JS Array-----------------------------------------------*/
const arr = ["item1", "item2", "item3", "item4"];
for(let i=0; i<=3; i++){
    document.write(arr[i] + "<br />");
}


/*--------------------------------------- JS if-else -----------------------------------------------*/
var age = 22;
if(age > 18){
    document.write("<br />" + "Congratulations ! You can vote." + "<br />");
}
else{
    document.write("<br />" + "Sorry ! You can't vote." + "<br />");
}


/*--------------------------------------- JS for-each loop -----------------------------------------------*/
const arr2 = [10, 20, 60, 16, 70, 7, 6];
var result = "";
arr2.forEach(arrfun);

function arrfun(value){
    result += value + "<br />";
}

document.write("<br /><br />" + "Array using forEach:" + "<br />" +  result);