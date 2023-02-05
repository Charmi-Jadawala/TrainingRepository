const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.json());
app.disable("x-powered-by");

app.get('/', (req, res) => {
    console.log('Express app is running...');
    res.send('<h1 style="text-align: center">Welcome to Customers API!</h1>');
    res.end();
});

//GET Request
app.get('/customers', (req, res) => {
    fs.readFile('./customer.json', { encoding: 'utf-8'}, (err, data) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(data);
            res.end();
        }
    });
});

//GET Request with ID
app.get('/customers/:id', (req, res) => {
    var fileData = [];
    fs.readFile('./customer.json', { encoding: 'utf-8'}, (err, data) => {
        if(err) {
            console.log(err);
        }
        else {
            fileData = JSON.parse(data);
            var matchedRecord = fileData.findIndex((record) => {
                return req.params.id == record.Id;
            });
            console.log(fileData[matchedRecord]);
            res.send(fileData[matchedRecord]);
            res.end();
        }
    });
});

//POST Request
app.post('/customer', (req, res) => {
    var fileData = [];
    fs.readFile('./customer.json', { encoding: 'utf-8'}, (err, data) => {
        if(err) {
            console.log(err);
        }
        else {
            fileData = JSON.parse(data);
            fileData.push(req.body);
            console.log(req.body);
            fs.writeFile('./customer.json', JSON.stringify(fileData),(error) => {
                if(error) {
                    console.log(error);
                }
                else {
                    console.log('Record Added...');
                }
            })
            res.send(fileData);
            res.end();
        }
    });
});

//PUT Request
app.put('/customer/:id', (req, res) => {
    var fileData = [];
    fs.readFile('./customer.json', {encoding: 'utf-8'}, (err, data) => {
        if(err) {
            console.log(err);
        }
        else {
            fileData = JSON.parse(data);
            var oldData = fileData.findIndex((record) => {
                return req.params.id == record.Id;
            });
            fileData[oldData] = req.body;
            console.log(fileData[oldData]);
            fs.writeFile('./customer.json', JSON.stringify(fileData),(error) => {
                if(error) {
                    console.log(error);
                }
                else {
                    console.log('Record Updated...');
                }
            });
            res.send(fileData);
            res.end();
        }
    });
});

//DELETE Request
app.delete('/customer/delete/:id', (req, res) => {
    var fileData = [];
    fs.readFile('./customer.json', {encoding: 'utf-8'}, (err, data) => {
        if(err) {
            console.log(err);
        }
        else {
            fileData = JSON.parse(data);
            var matchedRecord = fileData.findIndex((record) => {
                return req.params.id == record.Id;
            });
            console.log(fileData[matchedRecord]);
            fileData.splice(matchedRecord, 1);
            fs.writeFile('./customer.json', JSON.stringify(fileData),(error) => {
                if(error) {
                    console.log(error);
                }
                else {
                    console.log('Record Deleted...');
                }
            });
            res.send(fileData);
            res.end();
        }
    });
});

const server = app.listen(3000, () => {
    console.log('Server is listening at Port: 3000...');
});