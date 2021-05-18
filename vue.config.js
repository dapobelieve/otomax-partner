const fs = require("fs")
const { VuetifyLoaderPlugin } = require('vuetify-loader')
module.exports = {
	runtimeCompiler: true,
	configureWebpack: {
		plugins: [
			//(function(){ console.log("configure"); return new VuetifyLoaderPlugin()})(),
		]
	},
	transpileDependencies: [
		'vuetify'
	],
	// devServer: {
	// 	https: {
	// 		key: fs.readFileSync("./certs/localhost-key.pem"),
	// 		cert: fs.readFileSync("./certs/localhost.pem"),
	// 	}
	// }
}
