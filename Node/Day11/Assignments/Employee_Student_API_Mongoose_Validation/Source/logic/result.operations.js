const StudentModel = require('../models/student');

class ResultOperations {
    getResult(req, res) {
        StudentModel.findOne({"ID": req.params.id}, (err, data) => {
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
        StudentModel.update({"ID": id}, {$set:{"Result": req.body}}, (err, data) => {
            if(err) {
                console.log(err);
            }
            else {
                res.send(`Result record updated for ID: ${id}...`)
            }
            res.end();
        });
    }
}

module.exports = ResultOperations;