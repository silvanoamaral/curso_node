var app = require('./config/server');

/*
    Estamos usando o modulo consign, por isso não precisamos adicionar as routes da forma abaixo
    
    var rotaHome = require('./app/routes/home');
    rotaHome(app);

    var rotaNoticias = require('./app/routes/noticias')(app);

    var rotaFormInclusaoNoticia = require('./app/routes/formulario-inclusao-noticias')(app);
*/


app.listen(3000, function(){
    console.log('Servidor rodando com Express.  http://localhost:3000');
});