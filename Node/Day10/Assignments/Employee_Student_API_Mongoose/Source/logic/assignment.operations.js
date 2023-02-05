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
}

module.exports = AssignmentOperations;