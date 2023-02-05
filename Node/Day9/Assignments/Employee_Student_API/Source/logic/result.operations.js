const students = require('../json/student.json');
const fs = require('fs');
const router = require('../controllers/login.controller');

class ResultOperations {
    getResult(req, res) {
        var matchedRecord = students.findIndex((record) => {
            return record.ID == req.params.id;
        });
        console.log(students[matchedRecord].Result);
        res.send(students[matchedRecord].Result);
        res.end();
    }

    updateResult(req, res) {
        var matchedRecord = students.findIndex((record) => {
            return record.ID == req.params.id;
        });
        students[matchedRecord].Result = req.body;
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

module.exports = ResultOperations;