const express = require("express")
const jwt = require('jsonwebtoken')
const User = require("../models/users")
const bcrypt = require("bcryptjs")


const loginuser = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(401).json({
                status: "failed",
                message: "Missing Credentials"
            })
        }

        const finduser = User.findOne({ email })

        if (!finduser) {
            return res.status(401).json({
                status: "failed",
                message: "User Not Found"
            })
        }

        const match_password = bcrypt.compare(password, finduser.password)
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

    }
    catch (error) {
        res.status(401).json({
            statys: 'failed',
            message: error
        })
    }
}