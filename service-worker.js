//copied workbox
workbox.core.setCacheNameDetails({ prefix: 'localbuddy' })
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

const cacheName = 'cache_V1'
const appFiles = [
  '/index.html',
  '/',
  'src/views/OfflinePage.vue',
  '/img/Logo-LocalBuddy.svg'
  //Add more files
]

//custom
self.addEventListener('install', (installing) => {
  console.log('Service Worker: I am being installed, hello world!')
  installing.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('Service Worker: Caching important offline files')
      return cache.addAll(appFiles)
    })
  )
})

self.addEventListener('fetch', (fetching) => {
  if (fetching.request.method != 'POST') {
    fetching.respondWith(
      caches.open(cacheName).then(function (cache) {
        return cache.match(fetching.request).then((response) => {
          return (
            response ||
            fetch(fetching.request)
              .then((response) => {
                return caches.open(cacheName).then((cache) => {
                  cache.put(fetching.request, response.clone())
                  return response
                })
              })
              .catch(function () {
                console.log('Service Worker: Fetching online failed!')
                const isHTMLPage =
                  fetching.request.method == 'GET' &&
                  fetching.request.headers.get('accept').includes('text/html')
                if (isHTMLPage) {
                  console.log('HOOOI')
                  return caches.match('src/views/OfflinePage.vue')
                }
              })
          )
        })
      })
    )
  } else console.log('Cannot work with POST req.')
})

self.addEventListener('push', (pushing) => {
  console.log(
    "Service Worker: I received some push data, but because I am still very simple I don't know what to do with it :("
  )
})
