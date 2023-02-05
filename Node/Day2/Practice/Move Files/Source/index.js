//DAY-2 PRACTICE-5
const fs = require('fs/promises');
const fsExtra = require('fs-extra');

const folder = './myFolder';

async function createFolder() {
    try {
        await fs.mkdir(folder);
        console.log("Folder created...");
        return;
    } catch (err) {
        console.log("Oops! Folder already exists...");
    }
}

createFolder();

async function moveFile() {
    try {
        await fsExtra.move('./person.txt', './myFolder/person.txt');
        console.log("File moved...");
        return;
    } catch (err) {
        console.log("Oops! File already moved...");
    }
}

moveFile();