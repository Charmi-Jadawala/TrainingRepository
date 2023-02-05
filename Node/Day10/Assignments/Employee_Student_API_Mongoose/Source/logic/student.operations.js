const StudentModel = require('../models/student');

class StudentOperations {
    getAllStudents(req, res) {
        StudentModel.find((err, data) => {
            if(err) {
                console.log(err);
            }
            else {
                res.json(data);
                res.end();
            }
        });
    }

    getAStudent(req, res) {
        const id = req.params.id;
        StudentModel.findOne({"ID": id}, (err, data) => {
            if(err) {
                console.log(err);
            }
            else {
                if(data) {
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
        const newRecord = new StudentModel(req.body);
        await newRecord.save();
        console.log(req.body);
        StudentModel.find((err, data) => {
            if(err) {
                console.log(err);
            }
            else {
                res.json(data);
            }
            res.end();
        });
    }

    updateAStudent(req, res) {
        const id = req.params.id;
        StudentModel.findOneAndUpdate({"ID": id}, req.body, {new: true}, (err, data) => {
            if(err) {
                console.log(err);
            }
            else {
                res.json(data)
            }
            res.end();
        });
    }
}

module.exports = StudentOperations;