const EmployeeModel = require('../models/employee');

class EmployeeOperations {
    getAllEmployees(req, res) {
        EmployeeModel.find((err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(data);
                res.end();
            }
        }).sort('_id');
    }

    getAnEmployee(req, res) {
        const id = req.params.id;
        EmployeeModel.findById(id, (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                if (data) {
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
        try {
            const newRecord = new EmployeeModel(req.body);
            await newRecord.save();
            EmployeeModel.find((err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(data);
                }
                res.end();
            }).sort('_id');
        }
        catch (err) {
            for (let field in err.errors) {
                console.log(err.errors[field].message);
            }
            res.send('Enter valid data...');
            res.end();
        }
    }

    updateAnEmployee(req, res) {
        const id = req.params.id;
        try{
            EmployeeModel.findByIdAndUpdate(id, req.body, { new: true }, { runValidators: true }, (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(data)
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

    deleteAnEmployee(req, res) {
        const id = req.params.id;
        EmployeeModel.findByIdAndDelete( id, (err, data) => {
            if (err) {
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