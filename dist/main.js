
let renderer = new Renderer()

$("#search").on("click", function(){
    let food = $("#food").val()
    let ings = $("#ings").val()
    $.get(`/recipes/${food}`, function(recipes){
        recipes.ingredients = recipes.ingredients.split(" ")
        renderer.render(recipes)
    })
    
})