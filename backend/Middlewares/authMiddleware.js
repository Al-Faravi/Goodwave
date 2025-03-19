const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(403).json({
            message: 'Token is required',
            success: false,
        });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({
                message: 'Invalid or expired token',
                success: false,
            });
        }

        req.user = decoded;  // Attach the decoded user data to the request
        next();  // Proceed to the next middleware/route handler
    });
};

module.exports = authenticate;
