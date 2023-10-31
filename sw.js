self.addEventListener('install', evt => {
    console.log('Service worker installed', evt);
});

self.addEventListener('activate', evt => {
    console.log('Service worker activated', evt);
});

self.addEventListener('fetch', evt => {
    console.log('fetch', evt);
});