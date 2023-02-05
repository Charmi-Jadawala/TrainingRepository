const express = require('express');
const router = express.Router();
const fees = require('../controllers/fees.controller');
const result = require('../controllers/result.controller');
const studentOperations = require('../logic/student.operations');

class StudentController {
    static get(req, res) {
        const studentController = new studentOperations();
        studentController.getAllStudents(req, res);
    }
    static getAStudent(req, res) {
        const studentController = new studentOperations();
        studentController.getAStudent(req, res);
    }
    static createAStudent(req, res) {
        const studentController = new studentOperations();
        studentController.createAStudent(req, res);
    }
    static updateAStudent(req, res) {
        const studentController = new studentOperations();
        studentController.updateAStudent(req, res);
    }
    static deleteAStudent(req, res) {
        const studentController = new studentOperations();
        studentController.deleteAStudent(req, res);
    }
}

router.use('/:id/Fees', fees);
router.use('/:id/Result', result);

router.get('/', StudentController.get);
router.get('/:id', StudentController.getAStudent);
router.post('/student', StudentController.createAStudent);
router.put('/student/:id', StudentController.updateAStudent);
router.delete('/student/:id', StudentController.deleteAStudent);

module.exports = router;
