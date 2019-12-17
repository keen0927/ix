const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.[hash].js',
        chunkFilename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist'),
    },
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
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-typescript",
                            "@babel/preset-react"
                        ]
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
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
        ]
    },
    optimization: {
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CaseSensitivePathsPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[name].[hash].css"
        })
    ]
};