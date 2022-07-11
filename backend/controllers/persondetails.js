const userModel = require("../models/persondetails");

// to create new user

exports.createUser = async (req , res) => {
    try{
        const saveData = await new userModel(req.body).save();
        res.json(saveData);
    }catch(err){
        res.json({err});
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


delete user
// exports.deleteUser = (req, res) => {
//     userModel.findOneAndDelete({userID:req.params.userID}, (err, data) => {
//         if(err){
//             res.json(err);
//         }else{
//             res.json(data);
//         }
//     });
// }


// to update user
exports.updateUser = (req, res) => {
    userModel.findByIdAndUpdate({userID:req.params.userID}, req.body, {new:true},(err, data) => {
        if(err){
            res.json(err);
        }else{
            res.json(data);
        }
    });
}