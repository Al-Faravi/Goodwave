require('dotenv').config(); // Ensure this is called before accessing process.env

const mongoose = require('mongoose');
const mongo_url = process.env.MONGO_CONN;

console.log("Mongo URL from env:", mongo_url); // This should log your MongoDB URI

mongoose.connect(mongo_url)
    .then(() => {
        console.log('MongoDB Connected Successfully...');
    })
    .catch((err) => {
        console.log('MongoDB Connection error..Tui ghum jaa!', err);
    });
