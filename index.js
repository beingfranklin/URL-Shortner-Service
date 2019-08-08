const express = require("express");
const connectDB = require("./config/db");

const app = express();
//Connect to DB
connectDB();

//helps to accept JSON data to API
app.use(express.json({ extented: false }));
const PORT = 5000;

app.listen(PORT, () => console.log('Message : Server running on ${PORT}'));

