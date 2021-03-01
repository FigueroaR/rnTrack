const express = require ('express') // we need express module
const app = express();

app.get('/', (req, res) => {
    // every time someone does a request (rew)
    // tou our root route we send a response (res)
    res.send('Hi there!')
})


app.listen(3000, () => {
    console.log("I'm listening: 3000")
})