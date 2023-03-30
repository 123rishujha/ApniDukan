const mongoose = require("mongoose");


//user schema
const userSchema = mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true,unique : true},
    password: {type: String, required: true},
    number: {type: Number, required: true},
    address: String,
    country: String
},{
    versionKey:false
});


//model/template
const UserModel = mongoose.model('user',userSchema);


module.exports={
    UserModel
};

