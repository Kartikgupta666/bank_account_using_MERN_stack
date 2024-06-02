const jwt = require('jsonwebtoken')
const JWT_SECRET = "shhh";
const fetchuser = (req, res, next) => {
    // getting user from the jwt tocken and add id to the req obkect 
    const token = req.header("authToken")

    if (!token) {
        res.status(401).send({ error: "unauthorized error" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        // console.log(data.user.id)
        req.user = data.user;
        // console.log(req.user)
        next();

    } catch (error) {
        console.log(error)
        res.status(401).send({ error: "unauthorized error" })
    }
}

module.exports = fetchuser;