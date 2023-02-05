const PatientModel = require('../models/patient');
const DoctorModel = require('../models/doctor');

class PatientOperations {
    getSummaryReport(req, res) {
        PatientModel.find((err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(data);
                res.end();
            }
        }).populate('doctor').sort('_id');
    }

    getAllPatients(req, res) {
        DoctorModel.findById((err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(data.Patients);
                res.end();
            }
        });
    }

    getAllMedicines(req, res) {
        DoctorModel.findById((err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(data.Medicines);
                res.end();
            }
        });
    }
}

module.exports = PatientOperations;