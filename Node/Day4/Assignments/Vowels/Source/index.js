const http = require('http');
const url = require('url');

const vowels = (name) => {
    var arr = name.split("");
    for(let i = 0; i < arr.length; i ++) {
        if(arr[i] == 'A' || arr[i] == 'E' || arr[i] == 'I' || arr[i] == 'O' || arr[i] == 'U' || arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u') {
            return (arr[i]).toUpperCase();
        }
    }
}

const server = http.createServer((req, res) => {
    var urlData = url.parse(req.url, true);
    var urlQuery = urlData.query;
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(`First vowel character from ${(urlQuery.input)} is <strong><em>${vowels(urlQuery.input)}</em></strong>.`);
    res.end();
});

server.listen(3001, () => {
    console.log('Server is listening on port 3001...');
});


//  http://localhost:3001/vowelfind/?input=Charmi
