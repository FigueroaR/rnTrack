const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

// user is available as this, keyword function
// this is in context of this user model function 
userSchema.pre('save', function(next) {
    const user = this;
    if(!user.isModified('password')) {
        return next();
    }

    //crreating a 10 complex salt
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }

        bcrypt.hash(user.password, salt, (err, hash) => {
            if(err) {
                return next(err)
            }

            user.password = hash // our password is now hashed
            next();
        })
    })
 })

 userSchema.methods.comparePasswords = function(candidatePassword) {
    const user = this; // our uselr model in this schema

     // assemble our own promise, 
     // resolve when it works and reject when it goes wrong
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
            if(err) {
                return reject(err)
            }

            if(!isMatch) {
                return reject(false)
            }

            resolve(true)
        });

    })
 }

mongoose.model('User', userSchema) 
// associating mongoose and the model for mongoDB
// this is ran once!