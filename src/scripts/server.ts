

// import http = require('http');
// var fs = require('fs');
// var defaultPage = fs.readFileSync('..\default.html');
// var server = http.createServer(function(req, res)
// {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end(defaultPage);
// });

// server.listen(1500);
// console.log('Listening...');

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('../')).listen(8080, function(){
    console.log('Server running on 8080...');
});