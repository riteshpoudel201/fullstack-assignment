const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone: {
        type:Number,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    authtoken: {
        type:String,
    }
    
});

module.exports = mongoose.model('Users', UserSchema);