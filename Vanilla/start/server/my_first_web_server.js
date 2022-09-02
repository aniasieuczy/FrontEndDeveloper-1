var http_protocol = require('http');
var server = http_protocol.createServer();
server.on('request', function (req, res) {
    console.log(req.url + '     ' + req.method);
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.write('Witaj na Kursie Front-end');
    res.end();
});
var port = 8123;
server.listen(port);
server.once('listening', function () {
    console.log('My First Web server listening on port %d', port);
});

