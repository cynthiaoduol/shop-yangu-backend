// const jwt = require("jsonwebtoken")
import jwt from "jsonwebtoken"

const verifyToken = (req, res, next) => {
    console.log(req.headers)
    const authHeader = req.headers.token
    if (authHeader) {
        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {

            err ? res.status(403).json("Invalid Token") : req.user = user
            next()

        })

    } else {
        res.status(401).json("User is not Authenticated")
    }


}
const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            res.status(500).json("Task not supported")
        }
    })
}

const verifyTokenAndAdmin = (req, res, next) => {

    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            res.status(500).json("Task not supported")

        }
    })
}

export default verifyTokenAndAuthorization
export {verifyTokenAndAdmin}

// module.exports={verifyTokenAndAuthorization,verifyTokenAndAdmin}

