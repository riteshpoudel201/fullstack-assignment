const express= require('express');
const router = express.Router();
const Users = require('../models/user');


//getting all the users stored in the database
router.get('/user' , async (req,res) => {
    try{
        const users = await Users.find();
        res.json(users);
    }
    catch(err){
        res.json({message : err});
    }
});
router.get('/:UserID' , async (req,res) => {
    try{
        const userid = req.params.UserID;
        const User = await Users.findById(userid);
        res.json(User);
    }
    catch(err){
        res.json({message : err});
    }
});

//adding the user
router.post('/user' , (req,res) => {
    
    const password = req.body.password;
    const users = new Users({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: password
    });
    try{
        const savedUser = users.save();
        res.json(savedUser);
    }
    catch(err){
        res.json({ message : err})
    }
});

router.post('/login', async (req, res) => {
    try {
      
      const { email, password } = req.body;
      const user = await Users.findOne({ email });
      console.log(password);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
    if (password == user.password){
        return res.status(200).json({ message: 'Login successful', token: 'generated_token_here' });
    }
    else{
        return res.status(401).json({ error: 'Invalid credentials' });
    }
  
    
    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });

//Updating user using put method
router.put('/:UserID', async (req,res) =>{
    try{
        let userid = req.params.UserID;
        let fullname = req.body.fullname;
        let username = req.body.username;
        let email = req.body.email;
        let phone = req.body.phone;
        let password = req.body.password;
        const updateUser = await Users.updateOne({_id : userid, $set: { fullname :fullname,username:username,email:email,phone:phone,password:password}});
        res.status(200).json(updateUser);
    }
    catch(err){
        res.status(401).json({message : err});
    }
});

//deleting the user
router.delete('/:UserID',async (req,res) => {
    try{
        let userid = req.params.UserID;
        const userDelete = await Users.deleteOne({ _id:userid});
        res.json(userDelete);
    }
    catch(err){
        res.json({ message : err});
        console.log(err);
    }
});


module.exports = router;