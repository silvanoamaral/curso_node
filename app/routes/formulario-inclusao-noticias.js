module.exports = function(app){
    app.get('/formulario-inclusao-noticias',function(req, res){
        res.render("admin/form_add_noticia");
    });
}