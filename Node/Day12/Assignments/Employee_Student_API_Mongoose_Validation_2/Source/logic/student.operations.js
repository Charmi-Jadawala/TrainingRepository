const StudentModel = require('../models/student');

class StudentOperations {
    getAllStudents(req, res) {
        StudentModel.find((err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(data);
                res.end();
            }
        }).sort('_id');
    }

    getAStudent(req, res) {
        const id = req.params.id;
        StudentModel.findById(id, (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                if (data) {
                    res.json(data);
                }
                else {
                    res.send('Please enter valid Student ID...');
                }
                res.end();
            }
        });
    }

    async createAStudent(req, res) {
        try {
            const newRecord = new StudentModel(req.body);
            await newRecord.save();
            console.log(req.body);
            StudentModel.find((err, data) => {
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

    updateAStudent(req, res) {
        const id = req.params.id;
        try {
            StudentModel.findByIdAndUpdate(id, req.body, { new: true }, { runValidators: true }, (err, data) => {
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

    deleteAStudent(req, res) {
        const id = req.params.id;
        StudentModel.findByIdAndDelete(id, (err, data) => {
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

module.exports = StudentOperations;