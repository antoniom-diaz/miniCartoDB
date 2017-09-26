const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: path.resolve(__dirname + '/src/main.js'),
	output: {
		filename: 'carto.js',
		path: path.resolve(__dirname, 'dist'),
		library: 'carto',
		libraryTarget: 'var',
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