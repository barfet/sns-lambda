const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {  
  entry: './handler.ts',
  target: 'node',
  externals: [
    nodeExternals()
  ],
  module: {
    loaders: [
      { test: /\.ts(x?)$/, loader: 'ts-loader' }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx']
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, './../.webpack'),
    filename: 'handler.js'
  }
};