const fs = require('fs/promises');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

var num1 = 0;
var num2 = 0;
var operation = "";

function add(n1, n2) {
    let res = parseInt(n1) + parseInt(n2);
    appendData(`Addition: ${res}\n`);
}

function sub(n1, n2) {
    let res = parseInt(n1) - parseInt(n2);
    appendData(`Subtraction: ${res}\n`);
}

function mul(n1, n2) {
    let res = parseInt(n1) * parseInt(n2);
    appendData(`Multiplication: ${res}\n`);
}

function div(n1, n2) {
    let res = parseInt(n1) / parseInt(n2);
    appendData(`Division: ${res}\n`);
}

async function appendData(result) {
    try {
        await fs.writeFile('./Result.txt', result);
        console.log("Result Added...");
    } catch (err) {
        console.log(err);
    }
}

async function readData() {
    try {
        const fileData = await fs.readFile('./Result.txt', { encoding: 'utf-8' });
        console.log(fileData);
    } catch (err) {
        console.log(err);
    }
}

function mainFunction() {
    readline.question('Please enter 1st number: ', n1 => {
        num1 = n1;
        readline.question('Please enter 2nd number: ', n2 => {
            num2 = n2;
            readline.question('Please enter your choice: ', opr => {
                operation = opr;
                readline.close();

                switch (operation) {
                    case '+':
                        add(num1, num2);
                        break;
                    case '-':
                        sub(num1, num2);
                        break;
                    case '*':
                        mul(num1, num2);
                        break;
                    case '/':
                        div(num1, num2);
                        break;
                    default:
                        appendData('Please enter a valid choice !');
                }

                readData();
            });
        });
    });
}

mainFunction();


