const mongoose = require("mongoose");



// Create Schema ( format for db)

const linkSchema = new mongoose.Schema({
    git: String,
    facebook: String,
    linked:String,
    userID: String

})

module.exports = mongoose.model("link",linkSchema);  