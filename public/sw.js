self.addEventListener('install', event => {
    console.log('Service Worker installed with event : ', event)
})

self.addEventListener('activate', event => {
    console.log('Service Worker activated with event : ', event)
    return self.clients.claim();
})

self.addEventListener('fetch', event => {
    console.log('Service Worker fetched with event : ', event)
    event.respondWith(fetch(event.request));
})