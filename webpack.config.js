var webpack = require('webpack');
var path = require('path');


var APP_DIR = path.resolve(__dirname, 'src/client/app');
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');

var config = {
  entry: APP_DIR + "/index.jsx",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel'
      }
    ]
  }
};

module.exports = config;