const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './client/index.js',
	output: {
		path: path.join(__dirname, '/public'),
		filename: 'js/[name].js',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		loaders: [{
			loader: 'babel-loader',
			test: /\.jsx?$/,
			query: {
				presets: ['es2015', 'react'],
			},
			exclude: /node_modules/,
		}, {
			loader: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader!sass-loader',
			}),
			test: /\.(scss|sass)$/,
		}, {
			loader: 'html-loader',
			test: /\.html/,
		}],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Custom template using Handlebars',
			template: './view/index.ejs',
			hash: true,
			inject: true,
		}),
		new ExtractTextPlugin({
			filename: 'css/vendor.css', // 相对output
			disable: false,
			allChunks: true,
		}),
	],
}