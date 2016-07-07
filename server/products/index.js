function init(app) {
	app.get('/api/products', function (req, res) {
		var products = require('./products.json');
		res.status(200).send(products);
	});
}

module.exports = init;
