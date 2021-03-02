const express = require('express');

const router = express.Router(); 
//associate routes with app

router.post('/signup', (req, res) => {
    //req is what we get from the server
    console.log(req.body)
    res.send('You made a post req')
})


module.exports = router