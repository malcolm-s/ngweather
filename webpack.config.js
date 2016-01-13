var webpack = require('webpack');
var path = require('path');

var paths = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
}

module.exports = {
  entry: {
    app: paths.src + '/bootstrap.js'
  },
  output: {
    path: paths.dist,
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.html$/, loader: 'raw' }
    ]
  }
};
