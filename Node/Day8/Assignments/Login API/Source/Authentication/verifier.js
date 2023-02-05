const jwt = require('jsonwebtoken');

exports.verifier = (req, res, next) => {
    if(req.headers['token']) {
        jwt.verify(req.headers['token'], global.config.secretKey, { algorithms: global.config.algorithm }, (err, decoded) => {
            if(err) {
                res.status(401).send("Oops! Invalid Token...");
            }
            else {
                req.headers['data'] = decoded;
                next();
            }
        });
    }
    else {
        res.status(401).send('Oops! Token not provided...');
    }
};
