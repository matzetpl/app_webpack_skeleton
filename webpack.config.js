const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './project/src/app.js',

	plugins: [
		new CleanWebpackPlugin(),
		require('autoprefixer'),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: './project/src/app.html',
		  })
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '/project/public'),
		publicPath: '/'
	},
	devServer: {
		contentBase: './project/public',
		hot: true
	},
	module: {
		rules: [
			// {
			// 	test: /\.css$/,
			// 	use: ["style-loader", "css-loader", "postcss-loader"]
			// },
			{
				test: /\.html$/,
				loader: "raw-loader"
			  },			
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
				  {
					loader: MiniCssExtractPlugin.loader,
					options: {
					  hmr: process.env.NODE_ENV === 'development',
					},
				  },
				  'css-loader',
				  'postcss-loader',
				  'sass-loader',
				]
			},		
			
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader',
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader',
				],
			}

		],
	},
};

