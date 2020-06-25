module.exports = {
  //option
  //Basic path

  pwa: {
    // configure the workbox plugin
    // workboxPluginMode: 'GenerateSW',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'service-worker.js'
    }
  }
}
