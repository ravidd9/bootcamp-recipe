let renderer = new Renderer()

$("#search").on("click", function () {

    let food = $("#food").val()
    let ings = $("#ings").val()
    if (food != "") {
        let final = {
            food: food,
            ings: ings
        }
        console.log(final)
        $.post(`/recipes`, final, function (recipes) {
            recipes.forEach(rec => {
                rec.ingredients = rec.ingredients.split(" ")
            })
            renderer.render(recipes)
        })
    }
})



$("#recipes-container").on("click", "img", function () {
    console.log($(this).closest(".recipeCard").find(".link").text())
})