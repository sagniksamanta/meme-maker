const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    fname :{
        type:String,
        require:true
    },
    uname:{
        type:String,
        require:true,
        minlength:4
    },
    email :{
        type:String,
        require:true,
        unique:true
    },
    password :{
        type:String,
        require:true
    },
    image : [String]
})

const User = mongoose.model('USER' , userSchema);

module.exports = User;

