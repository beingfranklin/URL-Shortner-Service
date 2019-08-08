const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

//async await instaed of .then() as mongoose returns promise
const connectDB = async () => {

    try {
        await mongoose.connect(db, {
            useNewUrlParser: true
        });
        console.log("MongoDB connected...");
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;