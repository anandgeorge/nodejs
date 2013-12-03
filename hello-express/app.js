var express = require('express');
var app = express();
var http = require('http');

http.createServer(app).listen(3000);

app.use(express.static(__dirname + '/public'));
app.get('/', function(request, response)	{
	response.redirect('/index.html');
});

console.log('Listening on port 3000');
