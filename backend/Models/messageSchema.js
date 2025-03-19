const mongoose = require('mongoose');
const validator = require('validator');

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Required"],
        minLength: [3, "Name must contain at least 3 characters"]
    },
    email: {
        type: String,
        required: [true, "Email Required"],
        validate: {
            validator: validator.isEmail,
            message: "Please provide a valid email"
        }
    },
    subject: {
        type: String,
        required: [true, "Subject Required"],
        minLength: [5, "Subject must contain at least 5 characters"]
    },
    message: {
        type: String,
        required: [true, "Message Required"],
        minLength: [10, "Message must contain at least 10 characters"]
    }
});

// Correct export statement
module.exports = mongoose.model('Message', messageSchema);
