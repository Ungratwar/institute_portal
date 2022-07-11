const userModel = require("../models/link");

// to create new user

exports.newUser = async (req , res) => {
    try{
        const saveData = await new userModel(req.body).save();
        res.status(201).json(saveData);
    }catch(err){
        res.status(500).json({err});
    }
}

// to get All user

exports.getAllUser = async (req, res) => {
    try{
        const users = await userModel.find();
        res.json(users);
    }catch(err){
        res.json({err});
    }
}


// to get specific user
exports.getUser = async (req, res) => {
    try{
        const users = await userModel.find({userID:req.params.userID});
        res.json(users);
    }catch(err){
        res.json({err});
    }
}
