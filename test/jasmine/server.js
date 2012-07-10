var Static = require('node-static');
var fileServer = new Static.Server('./', {cache: false});

var port = 8888;

require('http').createServer(function (request, response) {
	request.addListener('end', function () {
		if (request.url === '/') {
			response.writeHead(301, {'Location': '/SpecRunner.html'});
			response.end();
		} else {
			fileServer.serve(request, response);
		}
	});
}).listen(port);

console.log('Running on http://localhost:' + port);
