var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// serve all the assets in our public folder
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/create-post', function (req, res){
	fs.readFile(__dirname + '/data/posts.json',
		function (error, file) {
			if (error || !req.body.blogpost) {
				console.log('Error reading file!');
				return;
			}
			// console.log(file.toString());

			var parsedFile = JSON.parse(file);

			// Update the data with newly added post
			parsedFile[Date.now()] = req.body.blogpost;

			// Now convert JSON to string
			// and write it to the file
			fs.writeFile(__dirname + '/data/posts.json',
				JSON.stringify(parsedFile),
				function (error) {
					console.log('error', error);
				}
			);
		}
	);

	res.redirect('/');
});

app.listen(3000, function() {
	console.log('Server is listening on port 3000. Ready to accept requests!');
});
