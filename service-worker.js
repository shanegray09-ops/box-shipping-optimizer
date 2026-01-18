self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('box-optimizer').then(cache => cache.addAll(['./']))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(r => r || fetch(event.request)));
});
