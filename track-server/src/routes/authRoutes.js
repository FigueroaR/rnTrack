const express = require('express');
const mongoose = require('mongoose'); // import mongoose to acces models
const User = mongoose.model('User'); // accesing the User model


const router = express.Router(); 
//associate routes with app

router.post('/signup', (req, res) => {
    //req is what we get from the server
    console.log(req.body)
    res.send('You made a post req')
})


module.exports = router