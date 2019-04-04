const express = require('express')
const router = express.Router()
const request = require('request')


router.get(`/sanity/`, function(req, res){
    res.send("ok")
})

router.post(`/recipes`, function(req,res){
    let body1 = req.body
    let food = body1.food
    let ings = body1.ings
    request(`http://www.recipepuppy.com/api/?q=${food}&i=${ings}`,function(err, result){
        let body = JSON.parse(result.body)
        console.log(body)
        let recipes = body.results
        res.send(recipes)
    })
})










module.exports = router