const webpack = require('webpack');
const path = require('path');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	productionSourceMap: false,
	lintOnSave: false,

	publicPath: process.env.NODE_ENV === 'production' ? '/build/' : '/',
	assetsDir: './',
	outputDir: './htdocs/build/',
    indexPath: '../index.html',
    /*
	configureWebpack: {
		plugins: [
			//new BundleAnalyzerPlugin(),
			new webpack.ProvidePlugin({
				mapboxgl: 'mapbox-gl',
			}),
		],
    },
    */
};

