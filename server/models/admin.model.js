const mongoose = require("mongoose");


//user schema
const adminSchema = mongoose.Schema({
    adminName: {type: String, required: true},
    email: {type: String, required: true,unique : true},
    password: {type: String, required: true},
    number: {type: Number, required: true},
    address: String,
    country: String
},{
    versionKey:false
});


//model/template
const AdminModel = mongoose.model('admin',adminSchema);


module.exports={
    AdminModel
};