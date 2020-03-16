const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	devtool: false,
	output: {
		filename: 'bundle.[hash:8].js',
		path: path.resolve(__dirname, '../dist'),
		chunkFilename: '[name].[hash:8].js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[hash:8].css',
			chunkFilename: '[name].[hash:8].css',
		}),
	],
});
