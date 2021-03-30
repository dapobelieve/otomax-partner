
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
    ]
}
