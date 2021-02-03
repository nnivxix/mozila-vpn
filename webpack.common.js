const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
		{
			test: /\.html$/,
			use: "html-loader"
		},{
				test: /\.(svg|png|jpg|gif)$/i,
				loader: "file-loader",
				options:{
					publicPath: "./assets",
					name: "[name].[hash].[ext]",
					outputPath: 'assets'
				}
				}
		]
	},
	plugins:[
	new HtmlWebpackPlugin({
		template:"./src/index.html",
		filename:"index.html",
		favicon:'./src/assets/favicon.png'
	}),
	]
}