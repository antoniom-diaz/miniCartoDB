const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: path.resolve(__dirname + '/src/app.js'),
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
		}]
	},
	plugins: [
		function() {
			this.plugin('watch-run', function(watching, callback) {
				console.log('Begin compile at ' + new Date());
				callback();
			});
		},
	]
};