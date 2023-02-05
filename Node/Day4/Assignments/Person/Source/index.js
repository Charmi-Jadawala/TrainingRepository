const http = require('http');
const fs = require('fs/promises');

var data = "";

async function readData(fileName) {
    try {
        data = await fs.readFile(fileName);
        console.log('Reading the File Data...');
    } catch (err) {
        console.log(err);
    }
}
readData('./Person.json');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
});
server.listen(3001, () => {
    console.log('Server is listening on port 3001...');
});