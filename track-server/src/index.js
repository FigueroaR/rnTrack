require('./models/User') // no need for const or var
require('./models/Track') // we need track at least once in project like User
const express = require ('express') // we need express module
const mongoose = require('mongoose') // connecting to MongoDB
const bodyParser = require('body-parser') // handle the incoming JSON
const authRoutes = require('./routes/authRoutes')
const trackRoutes = require('./routes/trackRoutes')
const requireAuth = require('./middlewares/requireAuth')

const app = express();

app.use(bodyParser.json()) // this must be before authRoutes
app.use(authRoutes) // we (associate) connect our routes with our app
app.use(trackRoutes)

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

app.get('/', requireAuth, (req, res) => {
    // every time someone does a request (rew)
    // tou our root route we send a response (res)
    res.send(` Your email is: ${req.user.email}`)
})


app.listen(3000, () => {
    console.log("I'm listening: 3000")
})