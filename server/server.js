var express = require('express');
var app = express();

var Products = require('./products');

Products(app);

var port = 4000;
app.listen(port, function () {
	console.log('Example app listening on port:', port);
});
