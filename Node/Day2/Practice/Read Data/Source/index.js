//DAY-2 PRACTICE-3
const fs = require('fs/promises');

const file1 = './demo_1.txt';
const file2 = './demo_2.txt';

async function readData(file) {
    try {
       const data = await fs.readFile(file, { encoding: 'utf-8'});
       console.log(`Reading contents of ${file}`);
       console.log(data);
    } catch (err) {
        console.log(err);
    }
}

readData(file1);

readData(file2);