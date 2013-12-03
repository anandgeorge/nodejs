var http = require('http'),
    fs = require('fs');

http.createServer(function (req, res) {
	if(req.url == '/') req.url = '/index.html';
	if(fs.existsSync(__dirname + '/public' + req.url))	{
		var stream = fs.createReadStream(__dirname + '/public' + req.url);
		stream.pipe(res);
	}
	else	{
	  res.writeHead(404);
  	res.end('Path does not exist');
	}
}).listen(3000);

console.log('Listening on port 3000');
