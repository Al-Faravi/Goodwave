const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,  // Corrected "string" to "String"
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    skills: {
        type: [String],  // Array to store multiple skills
        required: true,
    },
    causesSupported: {
        type: [String],  // Array to store multiple causes
        required: true,
    }
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;
