const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/', (req, res) => {
    const credentials = {
        username: req.body.username,
        password: req.body.password
    };

    const token = jwt.sign(credentials, global.config.secretKey, {
        algorithm: global.config.algorithm,
        expiresIn: global.config.expiresIn
    });

    if(credentials.username === 'admin' && credentials.password === 'password') {
        res.status(200).json({
            message: 'Login successfull...',
            jwtoken: token
        });
        res.end();
    }
    else {
        res.status(401).json({
            message: 'Login failed...'
        });
    }
});

module.exports = router;