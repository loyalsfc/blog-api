const jwt = require('jsonwebtoken');

exports.verifyToken = function(req, res, next){
    const token = req?.headers?.authorization;

    if(typeof token !== "undefined") {
        const bearerToken = req?.headers?.authorization.split(" ")[1];
        // req.token = bearerToken;
        const secretKey = process.env.SECRET_KEY
        jwt.verify(bearerToken, secretKey, function(err, decoded) {
            if(err) return res?.sendStatus(403);
            if(decoded){
                next();
            } // bar
        });
    } else {
        res?.sendStatus(403);
    }
}