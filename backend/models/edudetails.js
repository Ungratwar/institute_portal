const mongoose = require("mongoose");



// Create Schema ( format for db)

const eduSchema = new mongoose.Schema({
   title: String,
   marks: Number,
   startDate: Date,
   endDate: Date,
   userID: String

})

module.exports = mongoose.model("edudetails",eduSchema);     