
$("#search").on("click", function(){
    let food = $("#food").val()
    let ings = $("#ings").val()
    $.get(`/recipes/${food}`, function(recipes){


    })
    
})