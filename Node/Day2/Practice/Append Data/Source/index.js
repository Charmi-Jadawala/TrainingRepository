//DAY-2 PRACTICE-1
const fs = require('fs/promises');

async function appendData() {
    try {
        const data = "Hello India..." + "\t";
        await fs.appendFile('./person.txt', data);
        console.log("Data Appended...");
    }
    catch(err) {
        console.log(err);
    }
}

appendData();




