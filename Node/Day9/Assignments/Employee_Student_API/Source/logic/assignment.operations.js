const fs = require('fs');
const employees = require('../json/employee.json');

class AssignmentOperations {
    getAllAssignments(req, res) {
        var matchedIndex = employees.findIndex((record) => {
            return req.params.id == record.EmpId;
        });
        if (matchedIndex == -1) {
            res.send('Please enter valid Employee ID...')
        }
        else {
            res.send(employees[matchedIndex].Assignments);
        }
        res.end();
    }

    getAnAssignment(req, res) {
        var matchedEmployee = employees.findIndex((employee) => {
            return req.params.id == employee.EmpId;
        });
        if (matchedEmployee == -1) {
            res.send('Please enter valid Employee ID...');
        }
        else {
            var employeeAssignments = employees[matchedEmployee].Assignments;
            var matchedAssignment = employeeAssignments.findIndex((assignment) => {
                return req.params.assignmentId == assignment.AssignmentId;
            });
            if (matchedAssignment == -1) {
                res.send('Please enter valid Assignment ID...');
            }
            else {
                res.send(employees[matchedEmployee].Assignments[matchedAssignment]);
            }
        }
    }

    updateAnAssignment(req, res) {
        var matchedEmployee = employees.findIndex((employee) => {
            return req.params.id == employee.EmpId;
        });
        if (matchedEmployee == -1) {
            res.send('Please enter valid Employee ID...');
        }
        else {
            var employeeAssignments = employees[matchedEmployee].Assignments;
            var matchedAssignment = employeeAssignments.findIndex((assignment) => {
                return req.params.assignmentId == assignment.AssignmentId;
            });
            if (matchedAssignment == -1) {
                res.send('Please enter valid Assignment ID...');
            }
            else {
                employees[matchedEmployee].Assignments[matchedAssignment] = req.body;
                fs.writeFile('./json/employee.json', JSON.stringify(employees), (error) => {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        console.log(`Updated Assignment: ${req.params.assignmentId} for Employee: ${req.params.id}`);
                        res.send(employees[matchedEmployee].Assignments[matchedAssignment]);
                    }
                });
            }
        }
    }
}

module.exports = AssignmentOperations;