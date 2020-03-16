const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	output: {
		filename: 'bundle.[hash].js',
		path: path.resolve(__dirname, '../dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css',
		}),
	],
	devServer: {
		disableHostCheck: true,
		contentBase: path.resolve(__dirname, './public'),
		port: 4000,
		open: true,
		hot: true,
		historyApiFallback: true,
		overlay: true,
		stats: 'errors-only',
	},
	optimization: {
		removeAvailableModules: false,
		removeEmptyChunks: false,
		splitChunks: false,
	},
});
