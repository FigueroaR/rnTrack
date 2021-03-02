const express = require('express');

const router = express.Router(); 
//associate routes with app

router.post('/signup', (req, res) => {
    res.send('You made a post req')
})


module.exports = router