const bcrypt = require('bcryptjs');
const User = require("../models/AuthModel");
const jwt = require('jsonwebtoken');

const signupcontroller = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            role
        });

        await newUser.save();

        res.status(201).json({
            status: "success",
            message: "User created successfully",
            data: newUser.email
        });
    } catch (error) {
        res.status(500).json({ status: "failed", message: error.message });
    }
};


const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const finduser = await User.findOne({ email });

        if (!finduser) {
            return res.status(404).json({
                status: "failed",
                message: "User not found"
            });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, finduser.password);
        if (!isMatch) {
            return res.status(401).json({
                status: "failed",
                message: "Invalid credentials"
            });
        }

        // Generate token (you can limit fields in payload)
        const token = jwt.sign(
            {
                userId: finduser._id,
                email: finduser.email,
                role: finduser.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN || '1d'
            }
        );

        res.status(200).json({
            status: "success",
            message: "Login successful",
            data: {
                user: {
                    email: finduser.email,
                    username: finduser.username,
                    role: finduser.role
                },
                token
            }
        });

    } catch (error) {
        res.status(500).json({ status: "failed", message: error.message });
    }
};

module.exports = {
    signupcontroller,
    loginController
}
