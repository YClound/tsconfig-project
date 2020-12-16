const path = require('path');
const { merge } = require('webpack-merge');
const Webpack = require('webpack');
const common = require('./index');

module.exports = merge(common, {
  plugins: [
    new Webpack.HotModuleReplacementPlugin()
  ],
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    historyApiFallback: true,
    compress: true,
    inline: true,
    hot: true,
    port: 1234,
    host: '0.0.0.0',
  }
})