const jwt = require('jsonwebtoken');

const verifier = (req, res, next) => {
    const token = req.headers['token'];
    if(token) {
        jwt.verify(token, global.config.secretKey, {algorithms: global.config.algorithm }, (err, decoded) => {
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
}

module.exports = verifier;