const express = require('express');
const app = express();
app.disable("x-powered-by");

app.use((req, res, next) => {
    const date = new Date();
    console.log(`Date: ${date.toLocaleDateString()}, Time: ${date.toLocaleTimeString()}`);
    next();
});

app.get('/', (req, res, next) => {
    console.log('Access http://localhost:3000/');
    res.send('Hello World !!!');
    next();
});

app.get('/users', (req, res, next) => {
    console.log('Request Type:', req.method);
    res.send('Welcome Users!');
    next();
});

app.get('/user/:id', (req, res, next) => {
    console.log('Request URL:', req.originalUrl);
    if (req.params.id === '0') {
        next('route');
    }
    else {
        res.send(`Welcome User: ${req.params.id}`);
        next();
    }
}, (req, res, next) => {
    console.log('Request Type:', req.method);
});

app.get('/user/:id', (req, res, next) => {
    res.send('Please enter valid User ID...');
});

app.listen(3000, () => {
    console.log('Server is listening on Port: 3000...');
});