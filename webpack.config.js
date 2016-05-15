const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/web/app.js',
    output: {
        path: path.resolve(__dirname, './src/web/assets/compiled'),
        publicPath: "/",
        filename: 'app.min.js'
    },
    devtool: 'eval',
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    plugins: [
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
        root: ['node_modules']
    }
};
