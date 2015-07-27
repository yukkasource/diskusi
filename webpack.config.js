module.exports = {
	entry: [
	"./client/index.js"
	],
	output: {
		path: "./dist",
		filename: "bundle.js"
	},
	module: {
		loaders: [
		//{ test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
		{ test: /\.html$/i, loader: "html" },
		{ test: /\.css$/, loader: "style!css" },
		{ test: /\.less$/i, loader: "style!css!less" },
		//{ test: /\.scss$/i, loader: "style!css!sass" },
		{ test: /\.jpe?g$|\.gif$|\.eot(\?v=\d+\.\d+\.\d+)?$|\.png$|\.wav$|\.mp3$/,loader: "file" },
		{ test: /\.woff[0-9]?(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
		{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
		{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" },

		]
	},
	resolve: {
		modulesDirectories: ['node_modules'],
	},
};