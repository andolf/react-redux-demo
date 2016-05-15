var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./src/web/app'
	],
	output: {
		path: path.join(__dirname, 'src/web/assets/compiled'),
		filename: 'app.min.js',
		publicPath: 'assets/compiled/'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['react-hot', 'babel-loader'],
			include: path.join(__dirname, 'src')
		}, {
			test: /\.styl$/,
			loaders: ['style', 'css', 'stylus']
		}]
	},
	stylus: {
		use: [require('nib')()]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			output: {
				comments: false
			}
		})
	],
	resolve: {
		root: ['node_modules', 'src']
	}
};
