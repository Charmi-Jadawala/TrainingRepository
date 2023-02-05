const express = require('express');
const app = express();
app.disable("x-powered-by");
const jwt = require('jsonwebtoken');

const logger = require('./middlewares/Log');
global.config = require('./authentication/config');
const login = require('./controllers/login.controller');
const verifier = require('./authentication/verifier');
const employee = require('./controllers/employee.controller');
const student = require('./controllers/student.controller');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/EmployeeStudent')
.then(() => {
    console.log('Connected to MongoDB...');
})
.catch((err) => {
    console.log('Connection to MongoDB failed...');
});


app.use(express.json());
app.use(logger.log);

const port = 3000;

// http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Welcome to Radix...');
    res.end();
});

app.use('/login', login);
app.use(verifier);
app.use('/emps', employee);
app.use('/students', student);

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

const server = app.listen(port, () => {
    console.log(`Server is listening at Port: ${port}`);
});