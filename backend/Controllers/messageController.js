const Message = require('../Models/messageSchema');  // Correct import

exports.sendMessage = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!"
            });
        }

        // Use the correct Mongoose method to create a new document
        const newMessage = await Message.create({ name, email, subject, message });

        // Success response
        res.status(200).json({
            success: true,
            message: "Message Sent Successfully!",
        });
    } catch (error) {
        // Handle validation errors specifically
        if (error.name === "ValidationError") {
            let errorMessage = "";

            // Check for validation errors on specific fields
            if (error.errors.name) {
                errorMessage += error.errors.name.message + " ";
            }
            if (error.errors.email) {
                errorMessage += error.errors.email.message + " ";
            }
            if (error.errors.subject) {
                errorMessage += error.errors.subject.message + " ";
            }
            if (error.errors.message) {
                errorMessage += error.errors.message.message + " ";
            }

            // Return validation error response
            return res.status(400).json({
                success: false,
                message: errorMessage.trim(),  // Trim any extra spaces
            });
        }

        // Error response for other errors (general server issues)
        return res.status(500).json({
            success: false,
            error: error.message,  // Show the error message for better debugging
        });
    }
};
