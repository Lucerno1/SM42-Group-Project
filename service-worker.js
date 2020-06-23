const cacheName = "localbuddy_cache_V1";
const appFiles = [
  "OfflinePage.vue",
  "img/Logo-LocalBuddy.svg"
];


self.addEventListener("install",(installing)=>{
    console.log("Custom Service Worker: Installing");
    installing.waitUntil(
      caches.open(cacheName).then((cache)=>{
        console.log("Custom Service Worker: Caching");
        return cache.addAll(appFiles);
      })
    );
  });
  
  
  self.addEventListener("fetch",(fetching)=>{
    if(fetching.request.method != 'POST'){      
      fetching.respondWith(
        caches.open(cacheName).then(function(cache){
        return cache.match(fetching.request).then((response)=>{          
          return response||fetch(fetching.request).then((response)=>{
            return caches.open(cacheName).then((cache)=>{
                cache.put(fetching.request,response.clone());
              return response;
            });
          }).catch(function(){      
            console.log("Custom Service Worker: Fetching online failed!");
            const isHTMLPage = fetching.request.method == "GET";
            return caches.match("OfflinePage.vue");
          })
        })
      })
      );
  } else console.log("Custom Service Worker: Cannot POST, network error");
  });
  