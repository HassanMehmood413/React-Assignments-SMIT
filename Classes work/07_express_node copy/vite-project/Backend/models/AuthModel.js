const mongoose = require("mongoose");

const AuthModel = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: function (v) {
                return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address.`
        }
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return v && v.length >= 6;
            },
            message: props => `Password must be at least 6 characters long.`
        }
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'editor'], // Only allow these values
        default: 'user'
    }
});

module.exports = mongoose.model("User", AuthModel);
