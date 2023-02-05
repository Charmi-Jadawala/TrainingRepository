const fs = require('fs');
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
global.config = require('./Authentication/config');
const verify = require('./Authentication/verifier');
app.use(express.json());
app.disable("x-powered-by");

app.use((req, res, next) => {
    console.log(`Request Type: ${req.method}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome...');
    res.end();
});

app.post('/login', (req, res) => {
    const credentials = {
        username: req.body.username,
        password: req.body.password
    }
    const token = jwt.sign(credentials, global.config.secretKey, {
        algorithm: global.config.algorithm,
        expiresIn: global.config.expiresIn
    });

    if(credentials.username === 'admin' && credentials.password === 'password') {
        res.status(200).json({
            message: 'Login successful...',
            jwtoken: token
        });
    }
    else {
        res.status(401).json({
            message: 'Login failed...'
        });
    }
});

app.use(verify.verifier);

app.get('/fees', (req, res) => {
    var fileData = [];
    fs.readFile('./json/fees.json', {encoding: 'utf-8'}, (err, data) => {
        if(err) {
            console.log(err);
        }
        else{
            fileData = JSON.parse(data);
            res.send(fileData);
            res.end();
        }
    });
});

app.get('/result', (req, res) => {
    var fileData = [];
    fs.readFile('./json/result.json', {encoding: 'utf-8'}, (err, data) => {
        if(err) {
            console.log(err);
        }
        else {
            fileData = JSON.parse(data);
            res.send(fileData);
            res.end();
        }
    });
});

const server = app.listen(3000, () => {
    console.log('Server is listening at Port: 3000...');
});