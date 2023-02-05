const employees = require('../json/employee.json');
const fs = require('fs');

class EmployeeOperations {
    getAllEmployees(req, res) {
        res.json(employees);
        res.end();
    }

    getAnEmployee(req, res) {
        var matchedIndex = employees.findIndex((record) => {
            return req.params.id == record.EmpId;
        });
        if (matchedIndex == -1) {
            res.send('Please enter valid Employee ID...')
        }
        else {
            res.send(employees[matchedIndex]);
        }
        res.end();
    }

    createAnEmployee(req, res) {
        employees.push(req.body);
        console.log(req.body);
        fs.writeFile('./json/employee.json', JSON.stringify(employees), (error) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log('Record Added...');
            }
        });
        res.send(employees);
        res.end();
    }

    updateAnEmployee(req, res) {
        var oldData = employees.findIndex((record) => {
            return req.params.id == record.EmpId;
        });
        employees[oldData] = req.body;
        console.log(employees[oldData]);
        fs.writeFile('./json/employee.json', JSON.stringify(employees), (error) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log('Record Updated...');
            }
        });
        res.send(employees);
        res.end();
    }
}

module.exports = EmployeeOperations;