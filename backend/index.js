const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//importing routes
const bookRoute = require('./routes/book');
const userRoute = require('./routes/user');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');

// console.log(cartRoute);
//using imported routes
app.use('/book', bookRoute);
app.use('/user', userRoute);
app.use('/carts', cartRoute);
app.use('/orders', orderRoute);

//ROUTES
app.get('/', (req,res) =>{
    res.send("<h1>You are at home</h1>");
});

//connecting to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/bookstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB Connected")
});


app.listen(process.env.DEFAULT_PORT);