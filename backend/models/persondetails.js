const mongoose = require("mongoose");



// Create Schema ( format for db)

const personSchema = new mongoose.Schema({
    fullName: String,
    date: Date,
    hobbies : String,
    languagesKnown:String,
    address:String,
    maritialStatus:String,
    contactNO:Number,
    emailID:String,
    userID:String,
    batch:Number,
    gender:String




})

module.exports = mongoose.model("persondetails",personSchema);     