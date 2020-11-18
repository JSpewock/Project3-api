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
router.post('/', (req,res) => {
    Cocktail.create(req.body, (error, createdCocktail) => {
        if (error) {
            res.status(400).json({error: error.message})
        }
        res.status(200).json(createdCocktail)
    })
})


//update



//delete
router.delete('/:id', (req, res) => {
    C
})



module.exports = cocktail
