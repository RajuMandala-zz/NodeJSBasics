//We meed http module for web app
var http = require('http');
var fs = require('fs');

//Create Server and listen on port 8001
var server = http.createServer(onRequest);

//Handling Request
function onRequest(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	fs.readFile('./index.html', null, function(error, data) {
		if(error) {
			response.writeHead(404);
			response.write("File not found");
		} else {
			response.write(data);
		}
		response.end();
	});	
}

server.listen(8001);