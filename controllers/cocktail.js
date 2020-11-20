const express = require('express')
const router = express.Router()
const Cocktail = require('../models/cocktail')
const seed = require('../models/seed.js')

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
    console.log(req.session)
    Cocktail.create(req.body, (error, createdCocktail) => {
        if (error) {
            res.status(400).json({error: error.message})
        }
        res.status(200).json(createdCocktail)
    })
})


//update
router.put('/:id', (req,res)=> {
    Cocktail.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, createdCocktail)=> {
        if (error) {
            res.status(400).json({error: error.message})
        }
        res.status(200).json(createdCocktail)
    })
})


//delete
router.delete('/:id', (req, res) => {
    Cocktail.findByIdAndRemove(req.params.id, (error, deletedCocktail) => {
        if (error) {
            res.status(400).json( {error: error.message})
        }
        res.status(200).json(deletedCocktail)
    })
})

// Seed
router.post('/seed', (req, res) => {
    Cocktail.create(seed, (error, createdSeed) => {
        if (error) {
            res.status(400).json({error: error.message})
        }
        res.status(200).json(createdSeed)
    })
})

// Delete All
router.get('/deleteAll', (req, res) => {
    Cocktail.deleteMany({}, (error, deletedCocktail) => {
        if (error) {
            res.status(400).json( {error: error.message})
        }
        res.status(200).json(deletedCocktail)
    })
    
})

module.exports = router
