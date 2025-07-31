const mongoose = require("mongoose")


const User = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    username: String
})


module.exports = mongoose.model("User",User)