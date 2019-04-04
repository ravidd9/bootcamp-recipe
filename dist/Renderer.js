
class Renderer {
    render(recipes){
        $('#recipes-container').empty()
        let source = $('#recipe-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template({recipes});
        $('#recipes-container').append(newHTML);
    }
}