const express= require('express');
const router = express.Router();
const Cart = require('../models/cart');

// getting specific cart items
router.get('/cart/:id', async (req, res) => {
    try {
      const cartItemId = req.params.id;
  
      const cartItem = await Cart.findById(cartItemId)
        .populate('user')
        .populate('book')
        .exec();
  
      if (!cartItem) {
        res.status(404).send('Cart item not found');
      } else {
        res.json(cartItem);
      }
    } catch (error) {
      res.status(500).send('Error getting cart item');
    }
  });

// getting cart items of specific user
router.get('/cart/user/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
  
      const cartItems = await Cart.find({ user: userId })
        .populate('book')
        .exec();
  
      res.json(cartItems);
    } catch (error) {
      res.status(500).send('Error getting user cart');
    }
  });
  
  // updating the cart items
  router.put('/cart/:id', async (req, res) => {
    try {
      const cartItemId = req.params.id;
      const newQuantity = req.body.quantity;
  
      const updatedCartItem = await Cart.updateOne({_id : cartItemId, $set:{ quantity : newQuantity}}
      )
        .populate('user').populate('book').exec();
        
        res.status(200).json(updatedCartItem);
    } catch (err) {
        res.status(401).json({message : err});
    }
  });
  
  // deleting the cart items
  router.delete('/cart/:id', async (req, res) => {
    try {
      const cartItemId = req.params.id;
      const deletedCartItem = await Cart.deleteOne(cartItemId).exec();
      res.json(deletedCartItem);
    } catch (err) {
      res.json({message: err});
      console.log(err);
    }
  });

// calculate the total price of items in the cart
const calculateCartTotal = async (userId,res) => {
  try {
    const cartItems = await Cart.find({ user: userId }).populate('book').exec();

    let totalPrice = 0;
    for (const cartItem of cartItems) {
      totalPrice += cartItem.quantity * cartItem.book.price;
    }

    return totalPrice;
  } catch (error) {
    throw new Error('Error calculating cart total');
  }
};

// get the total price of items in the cart of a specific user
router.get('/cart/total/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    const totalPrice = await calculateCartTotal(userId,0);

    res.json({ total: totalPrice });
  } catch (error) {
    res.status(500).send('Error calculating cart total');
  }
});

  module.exports = router;