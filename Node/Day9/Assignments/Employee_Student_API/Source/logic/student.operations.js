const students = require('../json/student.json');
const fs = require('fs');

class StudentOperations {
    getAllStudents(req, res) {
        res.json(students);
        res.end();
    }

    getAStudent(req, res) {
        var matchedRecord = students.findIndex((record) => {
            return record.ID == req.params.id;
        });
        console.log(students[matchedRecord]);
        res.send(students[matchedRecord]);
        res.end();
    }

    createAStudent(req, res) {
        students.push(req.body);
        console.log(req.body);
        fs.writeFile('./json/student.json', JSON.stringify(students), (error) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log('Record Added...');
            }
        });
        res.send(students);
        res.end();
    }

    updateAStudent(req, res) {
        var matchedRecord = students.findIndex((record) => {
            return record.ID == req.params.id;
        });
        students[matchedRecord] = req.body;
        console.log(students[matchedRecord]);
        fs.writeFile('./json/student.json', JSON.stringify(students), (error) => {
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

module.exports = StudentOperations;