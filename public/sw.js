self.addEventListener('install', event => {
    console.log('Service Worker installed with event : ', event);

    // Adding file for caching
    event.waitUntil(
        
        // We can use any name as key e.g. static
        caches.open('static').then(cache => {
            console.log("Pre-caching app shell");

            // We can set such as cache.add('value') for single path
            cache.addAll([
                "/",
                "/src/js/app.js",
                "/src/css/app.css",
                "/src/css/feed.css",
                "/src/js/feed.js",
                "/src/js/material.min.js",
                "https://fonts.googleapis.com/css?family=Roboto:400,700",
                "https://fonts.googleapis.com/icon?family=Material+Icons",
                "https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css"
            ])

        })
    )
})

self.addEventListener('activate', event => {
    console.log('Service Worker activated with event : ', event);
    return self.clients.claim();
})

self.addEventListener('fetch', event => {
    console.log('Service Worker fetched with event : ', event);
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if(response){
                    return response;
                }else{
                    return fetch(event.request)
                }
            })
    );
})