const express = require('express');
const { sendMessage } = require('../Controllers/messageController');

const router = express.Router();
router.post("/send", sendMessage);

module.exports = router;
