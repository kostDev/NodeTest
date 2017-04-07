var http = require('http');

http.createServer(function (req, res) {
	
	var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
	switch(path){
		case '':
				res.writeHead(200,{'Content-Type': 'text/plane'});
				res.end('Homepage');
				break;
		case '/about':
				res.writeHead(200,{'Content-Type': 'text/plane'});
				res.end('O');
				break;
	
		default:
				res.writeHead(404,{'Content-Type': 'text/plane'});
				res.end('NOT FOUND');
				break;
	}
}).listen(3000);