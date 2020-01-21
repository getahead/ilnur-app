const webpack = require('webpack');
const config = require('./webpack.config.js');

module.exports = new Promise(function(resolve, reject) {
  webpack(config, (error, stats) => {
    console.log(stats);
    if (error) {
      reject(error);
    }

    resolve(stats);
  })
})
