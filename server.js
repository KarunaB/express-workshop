var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Hello world!');
});

app.get('/about', function(req, res) {
	res.send('About this blog!');
});

app.listen(3000, function() {
	console.log('Server is listening on port 3000. Ready to accept requests!');
});

