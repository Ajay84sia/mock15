const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
        try {
            const verifyToken = jwt.verify(token, "mock15");
            if (verifyToken) {
                req.body.Email = verifyToken.Email;
                next();

            }else{
                res.send({"msg":"Please Login!!"})
            }
        } catch (error) {
            res.send({"err":error.message})
        }
    }
}

module.exports = {
    auth
}