const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');
const { signup, login } = require('../Controllers/AuthController');

const router = require('express').Router();

router.post('/login', loginValidation, login);  // Corrected line
router.post('/signup', signupValidation, signup);

module.exports = router;
