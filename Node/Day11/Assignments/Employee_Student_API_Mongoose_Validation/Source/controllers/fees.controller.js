const express = require('express');
const router = express.Router({ mergeParams: 'true'});
const feesOperations = require('../logic/fees.operations');

class FeesController {
    static getFees(req, res) {
        const feesController = new feesOperations();
        feesController.getFees(req, res);
    }
    static updateFees(req, res) {
        const feesController = new feesOperations();
        feesController.updateFees(req, res);
    }
}

router.get('/', FeesController.getFees);
router.put('/', FeesController.updateFees);

module.exports = router;