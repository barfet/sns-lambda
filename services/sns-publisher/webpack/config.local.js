var webpack = require('webpack');
var merge = require('webpack-merge');

var base = require('./config.base.js');

var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge.smart(base, {
  plugins: [
    // Define local ENV vars that are supplied by default in Lambda
    new webpack.DefinePlugin({
      'process.env.AWS_REGION': `"${process.env.AWS_REGION}"`,
      'process.env.AWS_ACCESS_KEY_ID': `"${process.env.AWS_ACCESS_KEY_ID}"`,
      'process.env.AWS_SECRET_ACCESS_KEY': `"${process.env.AWS_SECRET_ACCESS_KEY}"`,
      'process.env.SNS_TOPIC_ARN': `"${process.env.SNS_TOPIC_ARN}"`
    }),
    new FriendlyErrorsWebpackPlugin()
  ]
})
