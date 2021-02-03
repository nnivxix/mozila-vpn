const path = require('path');
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin  = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
	optimization: {
		minimize:true,
		minimizer:[
		new CssMinimizerPlugin(), new TerserPlugin()
		],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          type: 'css/mini-extract',
          // For webpack@4
          // test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
	plugins: [
	new MiniCssExtractPlugin({
		filename:"[name].[contenthash].css"
	}),
	new CleanWebpackPlugin(),
	],
	mode:"production",
	output: {
		filename: "[name].[contenthash].bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	module:{ 
		rules: [
		{
			test: /\.scss$/,
			use: [
			MiniCssExtractPlugin.loader,
			"css-loader",
			"sass-loader"
			],
		},
		]
	}
} ) 