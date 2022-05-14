const mongoose = require('mongoose');
require("dotenv").config();

const connectDB =  async() => {
    try{
    const db = await mongoose.connect( "mongodb+srv://Eric:eric1080@cluster0.xvcze.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});
console.log(`MongoDB Connected: ${db.connection.host}`)
    }catch(err) {
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB