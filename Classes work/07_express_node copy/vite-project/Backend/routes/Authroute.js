const express = require('express');
const { signupcontroller, loginController } = require('../controller/AuthController');
const authMiddleware = require('../MiddleWares/authmiddleware');

const router = express.Router();

router.post('/signup', signupcontroller);
router.post('/login', loginController);

// Protected route
router.get('/profile', authMiddleware, (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Welcome to your profile",
        user: req.user
    });
});

module.exports = router;
