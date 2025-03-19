const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const AuthRouter = require('./Routes/AuthRouter');
const messageRouter = require('./Routes/messageRouter');  // ✅ Import messageRouter

require('./Models/db');  // ✅ Ensure MongoDB connection

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// ✅ Middleware should be at the top
app.use(cors());
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  
app.use(bodyParser.json());  

// ✅ Test API
app.get('/ping', (req, res) => {
    res.send('PONG');
});

// ✅ Routes
app.use('/auth', AuthRouter);  
app.use('/', messageRouter);  // Changed to root route

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
