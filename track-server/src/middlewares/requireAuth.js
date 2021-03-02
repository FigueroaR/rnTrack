// user includes token, then access / else no access

const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model('User')


module.exports = (req, res, next) => {
    const {authorization} = req.headers;
    // authorization == 'Bearer hiukdvbweliodlfjwec'

    if(!authorization){
        return res.status(401).send({error: 'You must be logged in'})
        // 401 forbidden err
    }

    const token = authorization.replace('Bearer ', '')
    // this will give only the token by itself and take out Bearer

    // second arg is secret key, then callback
    jwt.verify(token, 'MY_SECRET_KEY', async (err, payload) => {
        if(err) {
            return res.status(401).send({ error: 'You must be logged in'})
        }

        const { userId } = payload;
        const user = await User.findById(userId) 
        //tell mongoose to find user in MongoDB

        req.user = user; // we send the user
        next(); // then finally callback();
    }) 
}