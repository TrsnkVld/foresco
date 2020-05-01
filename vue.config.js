const webpack = require('webpack');
const path = require('path');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	productionSourceMap: false,

	// отключение хэшей в именах файлов
	filenameHashing: false,

	// глобальные css переменные
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/scss/_variables.scss";`
			}
		}
	}
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

