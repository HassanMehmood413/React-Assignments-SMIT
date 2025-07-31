const jwt = require("jsonwebtoken");

function verfiytoken(req, res, next) {
    const authheader = req.header.authorization;


    if (!authheader || !authheader.startWith("Bearer", "")) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    const token = authheader.split(" ")[1]

    try {
        const decode = jwt.decode(token, process.env.SECRET);
        req.user = decode

        next();
    }
    catch (error) {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
}

module.exports = verfiytoken;