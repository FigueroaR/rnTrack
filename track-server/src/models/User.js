const mongoose = require('mongoose')

// we are setting the usuers schema/parameters
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

mongoose.model('User', userSchema) 
// associating mongoose and the model for mongoDB
// this is ran once!