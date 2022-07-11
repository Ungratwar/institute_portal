const mongoose = require("mongoose");



// Create Schema ( format for db)

const projectSchema = new mongoose.Schema({
   title: String,
   skills: String,
   description: String,
   userID: String
   

})

module.exports = mongoose.model("project",projectSchema);     