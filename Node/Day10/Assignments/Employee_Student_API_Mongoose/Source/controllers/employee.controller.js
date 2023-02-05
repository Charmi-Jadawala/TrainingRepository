const express = require('express');
const router = express.Router();
const assignment = require('../controllers/assignment.controller');
const EmployeeOperations = require('../logic/employee.operations');

class EmployeeController {
    static get(req, res) {
        const employeeOperations = new EmployeeOperations();
        employeeOperations.getAllEmployees(req, res);
    }
    static getAnEmployee(req, res) {
        const employeeOperations = new EmployeeOperations();
        employeeOperations.getAnEmployee(req, res);
    }
    static createAnEmployee(req, res) {
        const employeeOperations = new EmployeeOperations();
        employeeOperations.createAnEmployee(req, res);
    }
    static updateAnEmployee(req, res) {
        const employeeOperations = new EmployeeOperations();
        employeeOperations.updateAnEmployee(req, res);
    }
    static deleteAnEmployee(req, res) {
        const employeeOperations = new EmployeeOperations();
        employeeOperations.deleteAnEmployee(req, res);
    }
}

router.use('/:id/assignments', assignment);
router.get('/', EmployeeController.get);
router.get('/:id', EmployeeController.getAnEmployee);
router.post('/employee', EmployeeController.createAnEmployee);
router.put('/employee/:id', EmployeeController.updateAnEmployee);
router.delete('/employee/:id', EmployeeController.deleteAnEmployee);
module.exports = router;