//We meed http module for web app
var http = require('http');
var fs = require('fs');
var url = require('url');

//Create Server and listen on port 8001
var server = http.createServer(onRequest);

//Handling Request
function onRequest(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	var path = url.parse(request.url).pathname;
	console.log(path);

	switch(path) {
		case '/':
			renderHtml('./index.html', response);
			break;
		case '/home':
			renderHtml('./home.html', response);
			break;
		default:
			response.writeHead(404);
			response.write('Route not defined');
			response.end();
	}
}

function renderHtml(path, response) {
	fs.readFile(path, null, function(error, data) {
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
