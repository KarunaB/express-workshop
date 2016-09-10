var express = require('express');
var app = express();

// serve all the assets in our public folder
app.use(express.static('public'));

app.listen(3000, function() {
	console.log('Server is listening on port 3000. Ready to accept requests!');
});
