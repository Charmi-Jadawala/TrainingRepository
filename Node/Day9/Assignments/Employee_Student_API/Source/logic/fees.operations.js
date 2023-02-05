const students = require('../json/student.json');
const fs = require('fs');
const router = require('../controllers/login.controller');

class FeesOperations {
    getFees(req, res) {
        var matchedRecord = students.findIndex((record) => {
            return record.ID == req.params.id;
        });
        console.log(students[matchedRecord].Fees);
        res.send(students[matchedRecord].Fees);
        res.end();
    }

    updateFees(req, res) {
        var matchedRecord = students.findIndex((record) => {
            return record.ID == req.params.id;
        });
        students[matchedRecord].Fees = req.body;
        console.log(students[matchedRecord].Fees);
        fs.writeFile('./student.json', JSON.stringify(students), (error) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log('Record Updated...');
            }
        });
        res.send(students);
        res.end();
    }
}

module.exports = FeesOperations;