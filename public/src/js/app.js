var deferredPrompt;
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js') // we can add an object {scope:'/help'} for specific scope to help page
        .then(() => {
            console.log('Service Worker Registered.')
        })
}


// Event listener for showing banner before app installation
window.addEventListener('beforeinstallprompt', event => {
    console.log('beforeinstallPrompt fired.')
    event.preventDefault();
    deferredPrompt = event;
    return false;
})