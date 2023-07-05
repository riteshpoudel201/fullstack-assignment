const express= require('express');
const router = express.Router();
const Order = require('../models/order');

// Place an order
router.post('/orders', async (req, res) => {
    try {
      const { userId, bookId, quantity } = req.body;
  
      // Create a new order
      const newOrder = new Order({
        user: userId,
        books: [{ book: bookId, quantity }],
        status: 'pending'
      });
  
      // Save the order to the database
      const savedOrder = await newOrder.save();
  
      res.status(201).json(savedOrder);
    } catch (error) {
      res.status(500).send('Error placing order');
    }
  });
  
  // Get orders by user ID
  router.get('/orders/user/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
  
      // Find orders for the given user
      const orders = await Order.find({ user: userId }).populate('books.book').exec();
  
      res.json(orders);
    } catch (error) {
      res.status(500).send('Error getting user orders');
    }
  });
  
  // Update order status
  router.put('/orders/:orderId', async (req, res) => {
    try {
      const orderId = req.params.orderId;
      const { status } = req.body;
  
      // Update the order status
      const updatedOrder = await Order.findByIdAndUpdate(
        orderId,
        { status },
        { new: true }
      );
  
      res.json(updatedOrder);
    } catch (error) {
      res.status(500).send('Error updating order status');
    }
  });
  
  module.exports = router;