var webpack = require('webpack');

module.exports = {
  entry:  './src',
  output: {
    path: 'builds',
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: 'builds/',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'main', // name of dependencies file
      children:  true, // look for common dependencies in all children,
      minChunks: 2 // number of repeats
    }, 'common.js'),
  ],
  module: {
    loaders: [
      {
        test:    /\.js/,
        loader:  'babel',
        include: __dirname + '/src'
      },
      {
        test:   /\.scss/,
        loader: 'style!css!sass'
      },
     {
        test:   /\.html/,
        loader: 'html'
    }
    ],
  }
};
