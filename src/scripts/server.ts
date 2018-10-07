

import http = require('http');

var server = http.createServer(function(req, res)
{
    res.writeHead(200);
    res.end('Hello from Node');
});

server.listen(1500);
console.log('Listening...');
