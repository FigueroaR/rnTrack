const express = require('express')
const mongoose = require('mongoose') // to acces track model
const requireAuth = require('../middlewares/requireAuth') // to verify user fo track creation

const Track = mongoose.model('Track');

const router = express.Router();

router.use(requireAuth) // ensure all request handles will require user to be signed in 

router.get('/tracks', async (req, res) => {
    // we will find a users tracks thru a users id that is loggined in
    const tracks = await Track.find({userId: req.user._id})

    res.send(tracks)
})

module.exports = router; // hook it up in index.js