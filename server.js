const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = process.env.PORT || 3003
const mongo_uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/project_three'


//middleware
app.use(express.json());

const whitelist = ['http://localhost:3000']
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors())

//mongoose
mongoose.connection.on('error', err => console.log(err.message + ' THIS IS THE ERROR MESSAGE'))
mongoose.connection.on('disconect', () => console.log('mongo has disconnected'))

mongoose.connect(mongo_uri, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', () => {
    console.log('connected to mongoose')
})


//controller
const cocktailController = require('./controllers/cocktail.js')
app.use('/cocktail', cocktailController)


app.get('/', (req,res)=> {
    res.redirect('/cocktail')
})


//listening port
app.listen(PORT, ()=> {
    console.log('listening on port ', PORT)
})