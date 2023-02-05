const express = require('express');
const router = express.Router({ mergeParams:'true' });
const PatientOperations = require('../logic/patient.operations');

class PatientController {
    static getSummaryReport(req, res) {
        const patientOperations = new PatientOperations();
        patientOperations.getSummaryReport(req, res);
    }
    static getAllPatients(req, res) {
        const patientOperations = new PatientOperations();
        patientOperations.getAllPatients(req, res);
    }
    static getAllMedicines(req, res) {
        const patientOperations = new PatientOperations();
        patientOperations.getAllMedicines(req, res);
    }
}

router.get('/', PatientController.getSummaryReport);
router.get('/:id/patientlist', PatientController.getAllPatients);
router.get('/:id/medicinelist', PatientController.getAllMedicines);

module.exports = router;