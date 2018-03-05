var http = require('http');
var server = http.createServer(function(require,response){
    response.end('<html><boy><h1>Teste</h1></body></html>')
});

server.listen(3000);