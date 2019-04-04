const express = require('express')
const router = express.Router()
const request = require('request')

router.get(`/sanity/`, function(req, res){
    res.send("ok")
})

router.get(`/recipes/:food`, function(req,res){
    let food = req.params.food
    console.log(food)
    request(`http://www.recipepuppy.com/api/?q=${food}`,function(err, result){
        let body = JSON.parse(result.body)
        let recipes = body.results
        res.send(recipes)
    })

})










module.exports = router