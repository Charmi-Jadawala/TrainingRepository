const StudentModel = require('../models/student');

class FeesOperations {
    getFees(req, res) {
        StudentModel.findOne({"ID": req.params.id}, (err, data) => {
            if(err) {
                console.log(err);
            }
            else {
                if(data) {
                    res.json(data.Fees);
                }
                else {
                    res.send('Please enter valid Student ID...');
                }
                res.end();
            }
        });
    }

    updateFees(req, res) {
        const id = req.params.id;
        StudentModel.update({"ID": id}, {$set:{"Fees": req.body}}, (err, data) => {
            if(err) {
                console.log(err);
            }
            else {
                res.send(`Fees record updated for ID: ${id}...`)
            }
            res.end();
        });
    }
}

module.exports = FeesOperations;