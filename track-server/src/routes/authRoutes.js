const express = require('express');
const mongoose = require('mongoose'); // import mongoose to acces models
const User = mongoose.model('User'); // accesing the User model


const router = express.Router(); 
//associate routes with app

router.post('/signup', async (req, res) => {
    //req is what we get from the server
    const {email, password} = req.body
    const user = new User({email, password})
    await user.save() //async opp 
    res.send('You made a post req')
})


module.exports = router