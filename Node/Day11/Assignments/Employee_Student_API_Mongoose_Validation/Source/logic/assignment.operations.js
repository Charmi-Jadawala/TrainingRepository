const EmployeeModel = require('../models/employee');

class AssignmentOperations {
    getAllAssignments(req, res) {
        EmployeeModel.findOne({"EmpId": req.params.id}, (err, data) => {
            if(err) {
                console.log(err);
            }
            else {
                res.json(data.Assignments);
                res.end();
            }
        });
    }

    getAnAssignment(req, res) {
        EmployeeModel.findOne({"EmpId": req.params.id}, (err, data) => {
            if(err) {
                console.log(err);
            }
            else {
                var allAssignments = data.Assignments;
                var matchedAssignment = allAssignments.findIndex((assignment) => {
                    return req.params.assignmentId == assignment.AssignmentId;
                });
                if (matchedAssignment == -1) {
                    res.send('Please enter valid Assignment ID...');
                }
                else {
                    res.json(data.Assignments[matchedAssignment]);
                }
                res.end();
            }
        });
    }

    async createAnAssignment(req, res) {
        try {
            EmployeeModel.findOne({"EmpId": req.params.id}, (err, data) => {
                if(err) {
                    console.log(err);
                }
                else {
                    data.Assignments.push(req.body);
                    data.save();
                    res.send(data);
                }
                res.end();
            });
        }
        catch (err) {
            for (let field in err.errors) {
                console.log(err.errors[field].message);
            }
            res.send('Enter valid data...');
            res.end();
        }
    }

    updateAnAssignment(req, res) {
        EmployeeModel.findOne({"EmpId": req.params.id}, (err, data) => {
            if(err) {
                console.log(err);
            }
            else {
                var allAssignments = data.Assignments;
                var matchedAssignment = allAssignments.findIndex((assignment) => {
                    return req.params.assignmentId == assignment.AssignmentId;
                });
                if (matchedAssignment == -1) {
                    res.send('Please enter valid Assignment ID...');
                }
                else {
                    allAssignments[matchedAssignment].set(req.body);
                    data.save();
                    res.json(allAssignments);
                }
                res.end();
            }
        });
    }

    deleteAnAssignment(req, res) {
        const id = req.params.id;
        EmployeeModel.findOne({ "EmpId": id }, (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                var allAssignments = data.Assignments;
                var matchedAssignment = allAssignments.findIndex((assignment) => {
                    return req.params.assignmentId == assignment.AssignmentId;
                });
                if (matchedAssignment == -1) {
                    res.send('Please enter valid Assignment ID...');
                }
                else {
                    allAssignments[matchedAssignment].remove();
                    data.save();
                    res.json(allAssignments);
                }
                res.end();
            }
        });
    }
}

module.exports = AssignmentOperations;