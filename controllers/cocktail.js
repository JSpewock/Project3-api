const express = require('express')
const router = express.Router()
const Cocktail = require('../models/cocktail')

//index
router.get('/', (req, res) => {
    Cocktail.find({}, (error, foundCocktails)=> {
        if(error) {
            res.status(400).json({error: error.message})
        }
        res.status(200).json(foundCocktails)
    })
})



//create



//update



//delete



module.exports = cocktail
