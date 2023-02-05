//DAY-2 PRACTICE-2
const fs = require('fs/promises');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

async function appendName(name) {
    try {
       const myName = `Hello ${name}\n`;
       await fs.appendFile('./person.txt', myName);
    } 
    catch (err) {
        console.log(err);
    }
}

readline.question('Please enter your Name: ', name => {
    appendName(name);
    readline.close();
    console.log("Name Appended...");
})