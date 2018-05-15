//We meed http module for web app
var http = require('http');

//Create Server and listen on port 8001
http.createServer(onRequest).listen(8001);

//Handling Request
function onRequest(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hello Node');
	response.end();
}