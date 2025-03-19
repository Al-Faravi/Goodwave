const { sign } = require("jsonwebtoken");
const UserModel = require("../Models/User"); // Correct import (no duplicate)
const bcrypt = require('bcrypt');

// Signup function to register a new user
const signup = async (req, res) => {
    try {
        const { name, email, password, skills, causesSupported } = req.body;

        // Check if the user already exists
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409).json({
                message: 'User already exists, you can login',
                success: false
            });
        }

        // Create a new user
        const userModel = new UserModel({ name, email, password, skills, causesSupported });

        // Hash the password before saving it to the database
        userModel.password = await bcrypt.hash(password, 10);
        
        // Save the user to the database
        await userModel.save();

        res.status(201).json({
            message: "Signup successful",
            success: true
        });
    } catch (err) {
        console.error('Error during signup:', err);  // Log error for debugging
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: err.message  // Return error message for easier debugging
        });
    }
}

// Login function to authenticate a user
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await UserModel.findOne({ email });
        const errorMsg = 'Authentication failed, email or password is incorrect';

        if (!user) {
            return res.status(403).json({
                message: errorMsg,
                success: false
            });
        }

        // Compare provided password with hashed password in the database
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({
                message: errorMsg,
                success: false
            });
        }

        // Create a JWT token
        const jwtToken = sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET, // Make sure this is defined in your .env file
            { expiresIn: '24h' }
        );

        res.status(200).json({
            message: "Login successful",
            success: true,
            jwtToken,
            email,
            name: user.name
        });
    } catch (err) {
        console.error('Error during login:', err);  // Log error for debugging
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: err.message  // Return error message for easier debugging
        });
    }
}

module.exports = {
    signup,
    login
}
