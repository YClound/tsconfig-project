const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.ts'),
  output: {
    filename: 'app.[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    // 加上.js防止webpack-dev-server起服务报模块找不到的错误
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    }
  },
  module: {
    rules: [{
      test: /\.(ts|tsx)$/i,
      use: ['ts-loader'],
      include: [
        path.resolve(__dirname, './../src')
      ]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    }),
  ],
}