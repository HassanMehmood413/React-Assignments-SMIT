const express = require("express")
const { signupcontroller, loginController } = require("../../vite-project/Backend/controller/AuthController")


const router = express.Router()



router.post("/signup", signupcontroller)
router.post("/login", loginController)


module.exports = router