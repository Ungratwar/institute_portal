const mongoose = require("mongoose");



// Create Schema ( format for db)

const userSchema = new mongoose.Schema({
    emailID: String,
    password: String,
    batch : Number,
    userType:String,
    status: String

})

module.exports = mongoose.model("users",userSchema);     