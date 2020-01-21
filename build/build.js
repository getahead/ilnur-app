const webpack = require('webpack');
const config = require('./webpack.config.js');

module.exports = new Promise(function(resolve, reject) {
    return webpack(config, (error, stats) => {
        if (error) {
            reject(error);
        }

        console.log(stats);
        resolve(stats);
    })
})