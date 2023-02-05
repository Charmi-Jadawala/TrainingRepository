const express = require('express');
const router = express.Router({ mergeParams: 'true'});
const resultOperations = require('../logic/result.operations');

class ResultController {
    static getResult(req, res) {
        const resultController = new resultOperations();
        resultController.getResult(req, res);
    }
    static updateResult(req, res) {
        const resultController = new resultOperations();
        resultController.updateResult(req, res);
    }
}

router.get('/', ResultController.getResult);
router.put('/', ResultController.updateResult);

module.exports = router;