const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || '3003'
const mongo_uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/project_three'




//mongoose
mongoose.connection.on('error', err => console.log(err.message + ' THIS IS THE ERROR MESSAGE'))
mongoose.connection.on('disconect', () => console.log('mongo has disconnected'))

mongoose.connect(mongo_uri, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', () => {
    console.log('connected to mongoose')
})


app.get('/', (req,res)=> {
    res.send('Hello World')
})

app.listen(PORT, ()=> {
    console.log('listening on port ', PORT)
})