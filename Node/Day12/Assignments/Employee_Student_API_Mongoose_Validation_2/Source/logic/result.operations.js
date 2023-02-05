const StudentModel = require('../models/student');

class ResultOperations {
    getResult(req, res) {
        StudentModel.findById(req.params.id, (err, data) => {
            if(err) {
                console.log(err);
            }
            else {
                if(data) {
                    res.json(data.Result);
                }
                else {
                    res.send('Please enter valid Student ID...');
                }
                res.end();
            }
        });
    }

    updateResult(req, res) {
        const id = req.params.id;
        try {
            StudentModel.findById(id, (err, data) => {
                if(err) {
                    console.log(err);
                }
                else {
                    data.Result = req.body;
                    data.save();
                    res.send(data);
                }
                res.end();
            });
        }
        catch (error) {
            for (let field in err.errors) {
                console.log(err.errors[field].message);
            }
            res.send('Enter valid data...');
            res.end();
        }
    }
}

module.exports = ResultOperations;