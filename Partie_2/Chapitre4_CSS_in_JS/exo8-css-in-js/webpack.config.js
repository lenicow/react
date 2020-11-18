const HTMLWebpackPlugin = require("html-webpack-plugin");
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + "/index.html",
	filename: "index.html",
	inject: "body",
});

const globalConfig = {
	entry: __dirname + "/index.js",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
		],
	},
	output: {
		filename: "transformed.js",
		path: __dirname + "/build",
	},
	plugins: [HTMLWebpackPluginConfig],
};

module.exports = (env, argv) => { 
	const config = {...globalConfig}
	if( argv.mode === "development"){
		config.devtool = "inline-source-map";
	}
	return config;
};