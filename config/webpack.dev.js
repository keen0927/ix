const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true,
        overlay: true
    },
});