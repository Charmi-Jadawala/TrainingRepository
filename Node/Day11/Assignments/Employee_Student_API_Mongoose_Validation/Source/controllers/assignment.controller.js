const express = require('express');
const router = express.Router({ mergeParams:'true' });
const AssignmentOperations = require('../logic/assignment.operations');

class AssignmentController {
    static getAllAssignments(req, res) {
        const assignmentOperations = new AssignmentOperations();
        assignmentOperations.getAllAssignments(req, res);
    }
    static getAnAssignment(req, res) {
        const assignmentOperations = new AssignmentOperations();
        assignmentOperations.getAnAssignment(req, res);
    }
    static createAnAssignment(req, res) {
        const assignmentOperations = new AssignmentOperations();
        assignmentOperations.createAnAssignment(req, res);
    }
    static updateAnAssignment(req, res) {
        const assignmentOperations = new AssignmentOperations();
        assignmentOperations.updateAnAssignment(req, res);
    }
    static deleteAnAssignment(req, res) {
        const assignmentOperations = new AssignmentOperations();
        assignmentOperations.deleteAnAssignment(req, res);
    }
}

router.get('/', AssignmentController.getAllAssignments);
router.get('/:assignmentId', AssignmentController.getAnAssignment);
router.post('/', AssignmentController.createAnAssignment);
router.put('/:assignmentId', AssignmentController.updateAnAssignment);
router.delete('/:assignmentId', AssignmentController.deleteAnAssignment);
module.exports = router;