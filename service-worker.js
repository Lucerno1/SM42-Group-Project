const cacheName = "localbuddy_cache_V1";
const appFiles = [
  "OfflinePage.vue",
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
    if(fetching.request.method != 'POST'){//if we are getting sth
      //if we are not trying to get buddy cards, then proceed
      
        fetching.respondWith(
        caches.open(cacheName).then(function(cache){
        return cache.match(fetching.request).then((response)=>{
          
          return response||fetch(fetching.request).then((response)=>{
            return caches.open(cacheName).then((cache)=>{
                cache.put(fetching.request,response.clone());
              return response;
            });
          }).catch(function(){      
            console.log("Service Worker: Fetching online failed!");
            const isHTMLPage = fetching.request.method == "GET" && fetching.request.headers.get("accept").includes("text/html");
            if(isHTMLPage) return caches.match("OfflinePage.vue");
          })
        })
      })
      );
     
       
  } else console.log("Cannot POST, network error");
  });
  