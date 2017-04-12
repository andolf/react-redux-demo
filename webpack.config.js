const path = require('path');
const webpack = require('webpack');

module.exports = function(env) {
	return {
		context: path.resolve(__dirname, 'src'),
		entry: [
			'react-hot-loader/patch',
			'webpack-dev-server/client?http://localhost:3000',
			'webpack/hot/only-dev-server',
			'./web'
		],
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, 'dist'),
			publicPath: '/static/'
		},
		devtool: 'eval',
		module: {
			rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				enforce: 'pre',
				use: [
					'eslint-loader'
				],
			}, {
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					'babel-loader'
				],
			}, {
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader?modules&importLoaders=1',
					'postcss-loader'
				],
			}]
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NamedModulesPlugin()
		],
		resolve: {
			extensions: ['.js', '.json'],
			modules: [
				path.join(__dirname, 'src'),
				'node_modules', 'src'
			]
		},
		devServer: {
			host: 'localhost',
			hot: true,
			contentBase: path.resolve(__dirname, 'src/web'),
			publicPath: '/static/',
			port: 3000,
			historyApiFallback: true,
			proxy: {
				'/api': {
					target: 'http://localhost:4000'
				}
			}
		}
	};
};
