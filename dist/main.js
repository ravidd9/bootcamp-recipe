
let renderer = new Renderer()

$("#search").on("click", function(){
    let food = $("#food").val()
    let ings = $("#ings").val()
    $.get(`/recipes/${food}`, function(recipes){
        console.log(recipes)
        console.log(recipes[0].title)
        recipes.forEach(rec => {
            rec.ingredients = rec.ingredients.split(" ")
        })
        renderer.render(recipes)
    })
    
})

$("#recipes-container").on("click", "img", function(){
    console.log($(this).closest(".recipeCard").find(".link").text())
})