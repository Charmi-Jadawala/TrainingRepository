//DAY-4 PRACTICE-1
require('dotenv').config();
const http = require('http');
const fs = require('fs/promises');

var data = "";

async function readData(fileName) {
    try {
        data = await fs.readFile(fileName);
        console.log('Reading File Data...');
    } catch (err) {
        console.log(err);
    }
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!!!');
    readData('./info.txt');
    res.write(data);
    res.end();
});

server.listen(process.env.Port, () => {
    console.log(`Server is listening on Port: ${process.env.Port}`);
});

