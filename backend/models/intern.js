const mongoose = require("mongoose");



// Create Schema ( format for db)

const internSchema = new mongoose.Schema({
  companyName:String,
  role:String,
  duration:String,
  description:String,
  userID: String
   

})

module.exports = mongoose.model("intern",internSchema);     