const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.json());
app.disable("x-powered-by");

app.get('/', (req, res) => {
    console.log('Express app is running...');
    res.send('<h1 style="text-align: center">Welcome to Students API!</h1>');
    res.end();
});

//GET Request
app.get('/students', (req, res) => {
    fs.readFile('./student.json', { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
            res.end();
        }
    });
});

//GET Request with ID
app.get('/students/:id', (req, res) => {
    var fileData = [];
    fs.readFile('./student.json', { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            fileData = JSON.parse(data);
            var matchedRecord = fileData.findIndex((record) => {
                return record.ID == req.params.id;
            });
            console.log(fileData[matchedRecord]);
            res.send(fileData[matchedRecord]);
            res.end();
        }
    });
});

//GET Request with ID and Fees
app.get('/students/:id/fees', (req, res) => {
    var fileData = [];
    fs.readFile('./student.json', { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            fileData = JSON.parse(data);
            var matchedRecord = fileData.findIndex((record) => {
                return record.ID == req.params.id;
            });
            console.log(fileData[matchedRecord].Fees);
            res.send(fileData[matchedRecord].Fees);
            res.end();
        }
    });
});

//GET Request with ID and Result
app.get('/students/:id/result', (req, res) => {
    var fileData = [];
    fs.readFile('./student.json', { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            fileData = JSON.parse(data);
            var matchedRecord = fileData.findIndex((record) => {
                return record.ID == req.params.id;
            });
            console.log(fileData[matchedRecord].Result);
            res.send(fileData[matchedRecord].Result);
            res.end();
        }
    });
});

//POST Request
app.post('/student', (req, res) => {
    var fileData = [];
    fs.readFile('./student.json', { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            fileData = JSON.parse(data);
            fileData.push(req.body);
            console.log(req.body);
            fs.writeFile('./student.json', JSON.stringify(fileData), (error) => {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log('Record Added...');
                }
            });
            res.send(fileData);
            res.end();
        }
    });
});

//PUT Request
app.put('/student/:id', (req, res) => {
    var fileData = [];
    fs.readFile('./student.json', { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            fileData = JSON.parse(data);
            var matchedRecord = fileData.findIndex((record) => {
                return record.ID == req.params.id;
            });
            fileData[matchedRecord] = req.body;
            console.log(fileData[matchedRecord]);
            fs.writeFile('./student.json', JSON.stringify(fileData), (error) => {
                if (error) {
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
app.delete('/student/delete/:id', (req, res) => {
    var fileData = [];
    fs.readFile('./student.json', {encoding: 'utf-8'}, (err, data) => {
        if(err) {
            console.log(err);
        }
        else {
            fileData = JSON.parse(data);
            var matchedRecord = fileData.findIndex((record) => {
                return record.ID == req.params.id;
            });
            console.log(fileData[matchedRecord]);
            fileData.splice(matchedRecord, 1);
            fs.writeFile('./student.json', JSON.stringify(fileData), (error) => {
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

app.listen(3000, () => {
    console.log('Server is listening at Port: 3000...');
});