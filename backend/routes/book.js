const express= require('express');
const router = express.Router();
const Books = require('../models/Book');



//getting all the books stored in the database
router.get('/' , async (req,res) => {
    try{
        const books = await Books.find();
        res.json(books);
    }
    catch(err){
        res.json({message : err});
    }
});
router.get('/:BookID' , async (req,res) => {
    try{
        const Book = await Books.findById(req.params.BookID);
        res.json(Book);
    }
    catch(err){
        res.json({message : err});
    }
});

//for limiting the numbers of data to be shown
router.get('/limit/:limit' , async (req,res) => {
    try{
        const books = await Author.find().limit(req.params.limit);
        res.json(books);
    }
    catch(err){
        res.json({message : err});
    }
});
//getting the lastly added data
router.get('/latest/:limit' , async (req,res) => {
    try{
        const books = await Books.find().sort({_id : -1}).limit(req.params.limit);
        res.json(books);
    }
    catch(err){
        res.json({message : err});
    }
});



//adding the book
router.post('/' ,(req,res) => {
    const books = new Books({
        title: req.body.title,
        isbn: req.body.isbn,
        author: req.body.author,
        status: req.body.status,
        price: req.body.price,
        category: req.body.category
    });
    try{
        const savedBook = books.save();
        res.json(savedBook);
    }
    catch(err){
        res.json({ message : err})
    }
});


//updating the book using patch method
router.patch('/:BookID', async (req,res) =>{
    try{
        let title = req.body.title;
        let isbn = req.body.isbn;
        let author = req.body.author;
        let status = req.body.status;
        let price = req.body.price;
        let category = req.body.category;
        const updateBook = await Category.updateOne({_id : req.params.BookID, $set: { title :title,isbn:isbn,author:author,status:status,price:price,category:category}});
        res.status(200).json(updateBook);
    }
    catch(err){
        res.status(401).json({message : err});
    }
});


//Updating book using put method
router.put('/:BookID', async (req,res) =>{
    try{
        let title = req.body.title;
        let author = req.body.author;
        let status = req.body.status;
        let price = req.body.price;
        let category = req.body.category;
        let isbn = req.body.isbn;
        const updateBook = await Category.updateOne({_id : req.params.BookID, $set: { title :title,isbn:isbn,author:author,status:status,price:price,category:category}});
        res.status(200).json(updateBook);
    }
    catch(err){
        res.status(401).json({message : err});
    }
});



//deleting the book
router.delete('/:bookID',async (req,res) => {
    try{
        const bookDelete = await Books.deleteOne({ _id:req.params.bookID});
        res.json(bookDelete);
    }
    catch(err){
        res.json({ message : err});
        console.log(err);
    }
});


module.exports = router;