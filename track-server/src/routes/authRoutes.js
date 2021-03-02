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
        const token = jwt.sign({userId: user._id}, 'MY_SEECRET_KEY') // we create a token
        res.send({token});

    } catch(err) {
        res.status(422).send(err.message)
        // http erro code 422 === usuer sent inavlid data
    }
    
})

router.post('/signin', async (req, res) => {
    const {email, password} = req.body
    if(!email || !password) {
        return res.status(422).send({error: 'Must Provide Correct Email and Password'})
    }

    // look for a user with email of
    const user = await User.findOne({email})

    if(!user) {
        return res.status(404).send({error: 'Inavlid password or email'})
    }

    try {
        await user.comparePasswords(password)
        const token = jwt.sign({userId: user_id}, 'MY_SEECRET_KEY')
        res.send({token});
    } catch(err) {
        return res.status(422).send({erro: 'Inavlid password or email'})
    }
    
})

module.exports = router