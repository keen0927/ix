const path = require("path");
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require("webpack-manifest-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "../src/index.tsx",
  output: {
    filename: "bundle.js",
		path: path.resolve(__dirname + "dist")
  },
  resolve: {
    extensions: [".ts", ".tsx", '.js']
  },
  module: {
    rules: [
      { 
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
            {
                loader: "ts-loader"
            }
        ]
      },
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new CleanWebpackPlugin(),
		// new HtmlWebPackPlugin({
		// 	template: '../public/index.html',
		// 	filename: 'index.html'
		// }),
    new ManifestPlugin({
      fileName: "manifest.json",
      basePath: "../dist/"
    })
	]    
};