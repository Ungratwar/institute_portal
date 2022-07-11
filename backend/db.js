const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/addvicstudents");

module.exports = mongoose;