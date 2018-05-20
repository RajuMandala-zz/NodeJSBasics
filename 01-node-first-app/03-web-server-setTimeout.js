//We meed http module for web app
var http = require('http');

//Create Server and listen on port 8001
var server = http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});	
	response.write('Hello\n');
	setTimeout(function(){
		response.end('node\n');
	}, 2000);
});

server.listen(8001);

