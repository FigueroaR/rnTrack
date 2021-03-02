const express = require('express');
const mongoose = require('mongoose'); // import mongoose to acces models
const jwt = require('jsonwebtoken')
const User = mongoose.model('User'); // accesing the User model


const router = express.Router(); 
//associate routes with app

router.post('/signup', async (req, res) => {
    //req is what we get from the server
    const {email, password} = req.body
    try {
        const user = new User({email, password})
        await user.save() //async opp 
        const token = jwt.sign({userId: user._id}, 'MY SEECRET KEY') // we create a token
        res.send({token})
    } catch(err) {
        res.status(422).send(err.message)
        // http erro code 422 === usuer sent inavlid data
    }
    
})


module.exports = router