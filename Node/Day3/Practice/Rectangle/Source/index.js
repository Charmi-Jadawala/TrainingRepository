//DAY-3 PRACTICE-2
var rectangle = require('./rectangle');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

var l = 0;
var b = 0;

readline.question(`Please enter the length of rectangle: `, len => {
    l = len;
    readline.question(`Please enter the breadth of rectangle: `, bdth => {
        b = bdth;
        readline.close();
        console.log(`Area of rectangle: ${rectangle.area(l, b)}`);
        console.log(`Perimeter of rectangle: ${rectangle.perimeter(l, b)}`);
    });
});

