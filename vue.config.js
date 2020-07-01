const manifestJSON = require('./public/manifest.json')

module.exports = {
  //option
  //Basic path

  pwa: {
    // configure the workbox plugin
    // workboxPluginMode: 'GenerateSW',
    themeColor: manifestJSON.theme_color,
    name: manifestJSON.short_name,
    msTileColor: manifestJSON.background_color,
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'service-worker.js'
    }
  }
}
