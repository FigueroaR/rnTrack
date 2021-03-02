const express = require('express');
const mongoose = require('mongoose'); // import mongoose to acces models
const User = mongoose.model('User'); // accesing the User model


const router = express.Router(); 
//associate routes with app

router.post('/signup', async (req, res) => {
    //req is what we get from the server
    const {email, password} = req.body
    try {
        const user = new User({email, password})
        await user.save() //async opp 
        res.send('You made a post req')
    } catch(err) {
        res.status(422).send(err.message)
        // http erro code 422 === usuer sent inavlid data
    }
    
})


module.exports = router