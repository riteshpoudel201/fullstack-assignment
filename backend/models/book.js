const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    isbn:{
        type:Number,
        required:true
    },
    status:{
        type: String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    category: {
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Books', BookSchema);