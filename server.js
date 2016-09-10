var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// serve all the assets in our public folder
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/create-post', function (req, res){
	console.log('/create-post');
	console.log(req.body);

	res.redirect('/');
});

app.listen(3000, function() {
	console.log('Server is listening on port 3000. Ready to accept requests!');
});
