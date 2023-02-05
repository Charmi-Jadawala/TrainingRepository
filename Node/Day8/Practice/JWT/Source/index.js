const express = require('express');
const app = express();
const router = express.Router();
const jwt = require('jsonwebtoken');
const fs = require('fs');
global.config = require('./config');
app.disable("x-powered-by");

app.use(express.json());

router.use((req, res, next) => {
    console.log(`Request Type: ${req.method}`);
    next();
});

//GET Request
router.get('/', (req, res) => {
    res.send('Welcome to Radix !!!');
});

//POST Request
router.post('/login', (req, res) => {
    var credentials = {
        username: req.body.username,
        password: req.body.password
    };

    var token = jwt.sign(credentials, global.config.secretKey, {
        algorithm: global.config.algorithm,
        expiresIn: '10m'
    });

    if (credentials.username === 'admin' && credentials.password === 'password') {
        res.status(200).json({
            message: 'You are successfully logged in...',
            jwtoken: token
        });
    }
    else {
        res.status(401).json({
            message: 'Login failed...'
        });
    }
});

const verifyToken = (req, res, next) => {
    if (req.headers['token']) {
        jwt.verify(req.headers['token'], global.config.secretKey, { algorithms: global.config.algorithm }, (err, decoded) => {
            if (err) {
                return res.status(401).send("Oops! Token Error...");
            }
            else {
                req.headers['data'] = decoded;
                next();
            }
        });
    }
    else {
        return res.status(401).send('Oops! Token not provided...');
    }
}

router.get('/customers', verifyToken, (req, res) => {
    console.log(req.headers['data']);
    var fileData = [];
    fs.readFile('./customer.json', { encoding: 'utf-8' }, (err, mydata) => {
        if (err) {
            console.log(err);
        }
        else {
            fileData = JSON.parse(mydata);
            res.send(fileData);
        }
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000, () => {
    console.log('Server is listening on Port: 3000...');
});

app.use('/', router);
