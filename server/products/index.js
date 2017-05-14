function init(app) {
	app.get('/api/products', (req, res) => {
		const products = require('./products.json');

		res.status(200).send(products);
	});

    app.get('/api/product/:id', (req, res) => {
        const products = require('./products.json');
        const product = products.find((item) => item.id === parseInt(req.params.id, 10));

        res.status(200).send(product);
    });
}

module.exports = init;
