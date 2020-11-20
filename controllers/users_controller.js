const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/user.js')

router.post('/', (req,res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (err, createdUser) => {
        console.log('new user created ', createdUser)
        req.session.currentUser = createdUser
        res.send('user created')
    })
})


module.exports = router