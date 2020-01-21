const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/index'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
  },
};
