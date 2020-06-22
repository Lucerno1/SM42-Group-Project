module.exports = {
    //option
    //Basic path
   
    //Output directory at build time
   
    pwa: {

        name: 'projectname',
        // configure the workbox plugin
        // workboxPluginMode: 'GenerateSW',
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
        // swSrc is required in InjectManifest mode.
        swSrc: 'service-worker.js',
        }

    },

  
}