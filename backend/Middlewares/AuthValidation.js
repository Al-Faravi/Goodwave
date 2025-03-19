const joi = require('joi');

const signupValidation = (req, res, next) => {
    const schema = joi.object({
        name: joi.string().min(3).max(100).required(),
        email: joi.string().email().required(),
        password: joi.string().min(4).max(100).required(),
        skills: joi.array().items(joi.string().min(1).max(50)).required(),  // Array of strings, each skill should be 1-50 characters long
        causesSupported: joi.array().items(joi.string().min(1).max(50)).required()  // Array of strings, each cause should be 1-50 characters long
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400)
            .json({ message: "Bad request", error: error.details });  // Return detailed error messages
    }
    next();
};

const loginValidation = (req, res, next) => {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(4).max(100).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400)
            .json({ message: "Bad request", error: error.details });  // Return detailed error messages
    }
    next();
};

module.exports = {
    signupValidation,
    loginValidation
};
