const User = require("../models/users")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")



const signupcontroller = async (req, res) => {
    try {

        const { email, password, username } = req.body;

        const hashedPassword = bcrypt.hash(password);

        const new_user = new User({
            email: email,
            password: hashedPassword,
            username: username
        })

        await new_user.save()

        res.status(201).json({
            status: "success",
            message: "User Created Successfully",
            Data: new_user.email
        })

    }
    catch (error) {
        res.status(500).json({
            status: "failed",
            message: "User Did Not Created",
            error: error
        })
    }
}

module.exports = {
    signupcontroller
}
