const express = require('express');
const router = express.Router();
const assignment = require('./patient.controller');
const DoctorOperations = require('../logic/doctor.operations');

class DoctorController {
    static getAllDoctors(req, res) {
        const doctorOperations = new DoctorOperations();
        doctorOperations.getAllDoctors(req, res);
    }
    static getADoctor(req, res) {
        const doctorOperations = new DoctorOperations();
        doctorOperations.getADoctor(req, res);
    }
    static createADoctor(req, res) {
        const doctorOperations = new DoctorOperations();
        doctorOperations.createADoctor(req, res);
    }
    static updateADoctor(req, res) {
        const doctorOperations = new DoctorOperations();
        doctorOperations.updateADoctor(req, res);
    }
    static deleteADoctor(req, res) {
        const doctorOperations = new DoctorOperations();
        doctorOperations.deleteADoctor(req, res);
    }
}

router.get('/', DoctorController.getAllDoctors);
router.get('/:id', DoctorController.getADoctor);
router.post('/doctor', DoctorController.createADoctor);
router.put('/doctor/:id', DoctorController.updateADoctor);
router.delete('/doctor/:id', DoctorController.deleteADoctor);

module.exports = router;