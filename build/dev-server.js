const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config');
const merge = require('webpack-merge');
const webPackDevServer = require('webpack-dev-server');

const options = {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    host: 'localhost',
    port: 9000,
    publicPath: '/',
    historyApiFallback: true,
}

webPackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webPackDevServer(compiler, options);

server.listen(9000, 'localhost', ()=>{
    console.log("dev start");
})