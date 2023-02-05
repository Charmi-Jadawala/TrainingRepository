const EmployeeModel = require('../models/employee');

class AssignmentOperations {
    getAllAssignments(req, res) {
        EmployeeModel.findById(req.params.id, (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(data.Assignments);
                res.end();
            }
        });
    }

    getAnAssignment(req, res) {
        EmployeeModel.findById(req.params.id, (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                var result = data.Assignments.id(req.params.assignmentId);
                if (result) {
                    res.json(result);
                }
                else {
                    res.send('Please enter valid Assignment ID...');
                }
                res.end();
            }
        });
    }

    async createAnAssignment(req, res) {
        EmployeeModel.findById(req.params.id, (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                try {
                    data.Assignments.push(req.body);
                    data.save();
                    res.json(data);
                }
                catch (ex) {
                    for (let field in ex.errors) {
                        console.log(ex.errors[field].message);
                    }
                    res.send('Enter valid data...');
                    res.end();
                }

            }
        });
    }

    updateAnAssignment(req, res) {
        EmployeeModel.findById(req.params.id, (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                try {
                    var oldData = data.Assignments.id(req.params.assignmentId);
                    if (oldData) {
                        oldData.set(req.body);
                        data.save();
                        res.json(data.Assignments);
                    }
                    else {
                        res.send('Please enter valid Assignment ID...');
                    }
                }
                catch (error) {
                    console.log('Enter valid data...');
                    res.send('Enter valid data...');
                    res.end();
                }
                res.end();
            }
        });
    }

    deleteAnAssignment(req, res) {
        EmployeeModel.findById(req.params.id, (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                var oldData = data.Assignments.id(req.params.assignmentId);
                if (oldData) {
                    oldData.remove();
                    data.save();
                    res.json(data.Assignments);
                }
                else {
                    res.send('Please enter valid Assignment ID...');
                }
                res.end();
            }
        });
    }
}

module.exports = AssignmentOperations;