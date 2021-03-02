
const express = require ('express') // we need express module
const mongoose = require('mongoose') // connecting to MongoDB

const app = express();

const mongoUri = 'mongodb+srv://admin:nopass@trackapp.38xut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true, // prevent common error message and warnings on terminal 
    useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance')
})
mongoose.connection.on('error', (err) => {
    console.error('Error Connecting', err)
})

app.get('/', (req, res) => {
    // every time someone does a request (rew)
    // tou our root route we send a response (res)
    res.send('Hiiii there!')
})


app.listen(3000, () => {
    console.log("I'm listening: 3000")
})