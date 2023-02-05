const http = require('http');
const fs = require('fs/promises');

var fileData = "";

async function readWriteData(fileName) {
    try {
        fileData = await fs.readFile(fileName);
        console.log('Reading File Data...');
        await fs.writeFile('./data.txt', fileData);
        console.log('Writing Data into File...');
    } catch (err) {
        console.log(err);
    }
}

const server = http.createServer((req, res) => {
    if(req.url === '/upload') {
        res.writeHead(200, {'Content-type': 'text/html'});
        readWriteData('./info.txt');
        res.write('Uploading File contents...');
        res.end();
    }
});

server.listen(3001, () => {
    console.log('Server is listening on port 3001...');
});

//  http://localhost:3001/upload