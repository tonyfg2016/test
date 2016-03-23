console.log('Started', self);
self.addEventListener('install', function(event) {
  self.skipWaiting();
  console.log('Installed', event);
});
self.addEventListener('activate', function(event) {
  console.log('Activated', event);
});
self.addEventListener('push', function(event) {
  console.log('Push message', event);
  var title = 'Hello all';
  
  event.waitUntil(
    self.registration.showNotification(title, {
      body: 'Push received',
      icon: 'images/icon.png',
      tag: 'my-tag'
    }));
});