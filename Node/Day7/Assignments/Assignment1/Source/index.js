const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');
app.use(express.json());
app.disable("x-powered-by");

router.use((req, res, next) => {
    console.log(`Request Type: ${req.method}`);
    next();
});

//GET all employees
router.get('/emps', (req, res) => {
    var fileData = [];
    fs.readFile('./employee.json', { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            fileData = JSON.parse(data);
            res.send(fileData);
        }
    });
});

//GET all assignments of a particular employee
router.get('/emps/:id/child/assignments', (req, res) => {
    var fileData = [];
    fs.readFile('./employee.json', { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            fileData = JSON.parse(data);
            var matchedIndex = fileData.findIndex((record) => {
                return req.params.id == record.id;
            });
            if (matchedIndex == -1) {
                res.send('Please enter valid Employee ID...')
            }
            else {
                res.send(fileData[matchedIndex].assignments);
            }
        }
    });
});

//GET a particular assignment of a particular employee
router.get('/emps/:id/child/assignments/:assignmentId', (req, res) => {
    var fileData = [];
    fs.readFile('./employee.json', { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            fileData = JSON.parse(data);
            var matchedEmployee = fileData.findIndex((employee) => {
                return req.params.id == employee.id;
            });
            if (matchedEmployee == -1) {
                res.send('Please enter valid Employee ID...');
            }
            else {
                var employeeAssignments = fileData[matchedEmployee].assignments;
                var matchedAssignment = employeeAssignments.findIndex((assignment) => {
                    return req.params.assignmentId == assignment.AssignmentId;
                });
                if (matchedAssignment == -1) {
                    res.send('Please enter valid Assignment ID...');
                }
                else {
                    res.send(fileData[matchedEmployee].assignments[matchedAssignment]);
                }
            }
        }
    });
});

//PUT (Update) a particular assignment of a particular employee
router.put('/emps/:id/child/assignments/:assignmentId', (req, res) => {
    var fileData = [];
    fs.readFile('./employee.json', { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            fileData = JSON.parse(data);
            var matchedEmployee = fileData.findIndex((employee) => {
                return req.params.id == employee.id;
            });
            if (matchedEmployee == -1) {
                res.send('Please enter valid Employee ID...');
            }
            else {
                var employeeAssignments = fileData[matchedEmployee].assignments;
                var matchedAssignment = employeeAssignments.findIndex((assignment) => {
                    return req.params.assignmentId == assignment.AssignmentId;
                });
                if (matchedAssignment == -1) {
                    res.send('Please enter valid Assignment ID...');
                }
                else {
                    fileData[matchedEmployee].assignments[matchedAssignment] = req.body;
                    fs.writeFile('./employee.json', JSON.stringify(fileData), (error) => {
                        if (error) {
                            console.log(error);
                        }
                        else {
                            console.log(`Updated Assignment: ${req.params.assignmentId} for Employee: ${req.params.id}`);
                            res.send(fileData[matchedEmployee].assignments[matchedAssignment]);
                        }
                    });
                }
            }
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
