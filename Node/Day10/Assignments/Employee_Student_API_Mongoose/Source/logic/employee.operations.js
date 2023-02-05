const EmployeeModel = require('../models/employee');

class EmployeeOperations {
    getAllEmployees(req, res) {
        EmployeeModel.find((err, data) => {
            if(err) {
                console.log(err);
            }
            else {
                res.json(data);
                res.end();
            }
        });
    }

    getAnEmployee(req, res) {
        const id = req.params.id;
        EmployeeModel.findOne({"EmpId": id}, (err, data) => {
            if(err) {
                console.log(err);
            }
            else {
                if(data) {
                    res.json(data);
                }
                else {
                    res.send('Please enter valid Employee ID...');
                }
                res.end();
            }
        });
    }

    async createAnEmployee(req, res) {
        const newRecord = new EmployeeModel(req.body);
        await newRecord.save();
        console.log(req.body);
        EmployeeModel.find((err, data) => {
            if(err) {
                console.log(err);
            }
            else {
                res.json(data);
            }
            res.end();
        });
    }

    async updateAnEmployee(req, res) {
        const id = req.params.id;
        EmployeeModel.findOneAndUpdate({"EmpId": id}, req.body, {new: true}, (err, data) => {
            if(err) {
                console.log(err);
            }
            else {
                res.json(data)
            }
            res.end();
        });
    }

    async deleteAnEmployee(req, res) {
        const id = req.params.id;
        EmployeeModel.findOneAndDelete({"EmpId": id}, (err, data) => {
            if(err) {
                console.log(err);
            }
            else {
                res.send(`Record: ${id} deleted...`);
            }
            res.end();
        });
    }
}

module.exports = EmployeeOperations;