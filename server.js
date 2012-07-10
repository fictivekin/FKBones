var static = require('node-static');
var fileServer = new static.Server('./webroot');

var port = process.env.PORT || 8000;
var ip = process.env.IP || "localhost";

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    });
}).listen(port, ip);

console.log('Running on http://' + ip + ':' + port);
