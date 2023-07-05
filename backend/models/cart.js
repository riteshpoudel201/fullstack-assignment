const mongoose = require('mongoose');
const User = require('./user');
// const Book = require('./book');

const CartSchema =new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  });
  
  // const Cart = mongoose.model('Cart', CartSchema);
  module.exports = mongoose.model('Cart', CartSchema);
  // module.exports = Cart;
  