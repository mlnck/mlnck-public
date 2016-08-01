var path = require('path'),
		webpack = require('webpack'),
		packageData = require('./package.json'),
		minify = process.argv.indexOf('--minify') != -1,
		filename = [packageData.name, packageData.version, 'js'],
		plugins = [];

if (minify) {
    filename.splice(filename.length - 1, 0, 'min');
    plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  entry: path.resolve(__dirname, packageData.main),
  output: {
      path: path.resolve(__dirname, 'build/js'),
      filename: filename.join('.'),
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
	plugins: plugins,
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
