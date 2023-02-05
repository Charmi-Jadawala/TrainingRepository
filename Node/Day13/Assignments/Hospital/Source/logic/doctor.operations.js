const DoctorModel = require('../models/doctor');

class EmployeeOperations {
    getAllDoctors(req, res) {
        DoctorModel.find((err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(data);
                res.end();
            }
        }).sort('_id');
    }

    getADoctor(req, res) {
        const id = req.params.id;
        DoctorModel.findById(id, (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                if (data) {
                    res.json(data);
                }
                else {
                    res.send('Please enter valid Doctor ID...');
                }
                res.end();
            }
        });
    }

    async createADoctor(req, res) {
        try {
            const newRecord = new DoctorModel(req.body);
            await newRecord.save();
            DoctorModel.find((err, data) => {
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

    updateADoctor(req, res) {
        const id = req.params.id;
        try{
            DoctorModel.findByIdAndUpdate(id, req.body, { new: true }, { runValidators: true }, (err, data) => {
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

    deleteADoctor(req, res) {
        const id = req.params.id;
        DoctorModel.findByIdAndDelete( id, (err, data) => {
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