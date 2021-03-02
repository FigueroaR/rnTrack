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


router.post('/tracks', async (req, res) => {
    const  {name, locations } = req.body;

    if (!name || !locations) {
        return res.status(422).send({error: "You must provide name and locations"})
    }

    // is user gives us false/trash info, we can handle error with try {} catch() {}

    try{
        const track = new Track({name, locations, userId: req.user._id})
        await track.save();
        res.send(track)
    } catch(err) {
        res.status(422).send({error: "Track's location information not correct"})
    }
    
})

module.exports = router; // hook it up in index.js