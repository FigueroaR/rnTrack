const mongoose = require('mongoose')

// pointSchema is made in the same file, it only makes sense here
const pointSchema = new mongoose.Schema({
    timestamp: Number, // time of location as a number is pulled from device
    coords: {
        latitude: Number,
        longitude: Number,
        altitude: Number,
        accuracy: Number,
        heading: Number,
        speed: Number
    }
})

const trackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // reference to some other object stored in MONGO DB
        ref: 'User' // reference to User  model inside Mongoose and Mogo
    },
    name: {
        type: String,
        default: ''
    },
    locations: [pointSchema] // points to a schema with different object that will be inside the arrray

})


mongoose.model('Track', trackSchema);