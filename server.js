var static = require('node-static');
var fileServer = new static.Server('./webroot');

var port = process.env.PORT;
var ip = process.env.IP;

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    });
}).listen(port, ip);

console.log('Running on http://' + ip + ':' + port);
