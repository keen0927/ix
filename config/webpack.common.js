// const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// const path = require('path');
// const merge = require('webpack-merge');
// const Target = process.env.npm_lifecycle_event;
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize: true}
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            useRelativePath: true,
                            limit: 10000
                        }
                    }
                ]
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ]
    },
    optimization: {
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                reactVendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|redux|react-redux|redux-saga|immer)[\\/]/,
                    name: "reactVendor"
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CaseSensitivePathsPlugin(),
        new ForkTsCheckerWebpackPlugin({
            async: false
        }),
    ]
};