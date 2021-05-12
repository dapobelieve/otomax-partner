
const { VuetifyLoaderPlugin } = require('vuetify-loader')
module.exports = {
	css: {
		loaderOptions: {
			sass: {
				// additionalData: `@import "@/assets/css/_variables.scss"`
			}
		}
	},
	runtimeCompiler: true,
	configureWebpack: {
		plugins: [
			//(function(){ console.log("configure"); return new VuetifyLoaderPlugin()})(),
		]
	},
	transpileDependencies: [
		'vuetify'
	]
}
