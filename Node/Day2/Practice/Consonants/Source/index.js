//DAY-2 PRACTICE-4
const fs = require('fs/promises');
const fsNormal = require('fs');

async function readFile() {
    try {
        const data = await fs.readFile('./address.txt', { encoding: 'utf-8' });
        console.log("Reading the contents of File...");
        const fileData = data.split('');
        var consonants = fileData.length;
        for (let i = 0; i < fileData.length; i++) {
            if (fileData[i] == 'A' || fileData[i] == 'E' || fileData[i] == 'I' || fileData[i] == 'O' || fileData[i] == 'U' || fileData[i] == 'a' || fileData[i] == 'e' || fileData[i] == 'i' || fileData[i] == 'o' || fileData[i] == 'u') {
                consonants--;
            }
        }
        console.log(consonants);
    } catch (err) {
        console.log(err);
    }
}

readFile();

fsNormal.unlink('./person.txt', err => {
    if (err) {
        console.log(`Oops! File doesn't exists \n${err}`);
    } else {
        console.log('File deleted...');
    }
})