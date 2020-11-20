const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/user.js')

router.post('/', (req,res) => {
    User.findOne({username: req.body.username}, (err, foundUser) => {
        if (err) {
            console.log(err)
            res.send('there was an error in the database. Try again')
        } else if (!foundUser) {
            res.send('this user does not exist')
        } else {
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.currentUser = foundUser
                res.send('user is logged in')
            } else {
                res.send('Password does not match')
            }
        }
    })
})

module.exports = router