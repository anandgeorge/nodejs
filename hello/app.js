var http = require("http");
 
http.createServer(function(request, response) {
	response.end('Hello World');
}).listen(3000);

console.log('Listening on port 3000');
