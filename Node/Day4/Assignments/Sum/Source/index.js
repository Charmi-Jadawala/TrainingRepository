const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    var urlData = url.parse(req.url, true);
    var urlQuery = urlData.query;
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(`Sum of ${parseInt(urlQuery.param1)} and ${parseInt(urlQuery.param2)} is ${parseInt(urlQuery.param1) + parseInt(urlQuery.param2)}`)
    res.end();
});
server.listen(3001, () => {
    console.log('Server is listening on port 3001...');
})

//  http://localhost:3001/product?param1=5&param2=10