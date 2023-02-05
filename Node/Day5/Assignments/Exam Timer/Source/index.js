const EventEmitter = require('events');
const http = require('http');
const fs = require('fs');

const myEvent = new EventEmitter();

myEvent.on('start', () => {
    console.log('Exam is started...');
});

myEvent.on('end', () => {
    console.log('Exam is over...');
});

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('./index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
            myEvent.emit('start');
        });
    }
    if(req.url === '/ExamOver') {
        myEvent.emit('end');
        res.write('Exam is over...');
        res.end();
    }
});

server.listen(3001, () => {
    console.log('Server is listening on Port: 3001...');
})