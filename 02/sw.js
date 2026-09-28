// Offline engine: saves the whole app on first open, then serves it from the device.
// When online, it quietly refreshes the saved copy so new words show up on the next open.
const VERSION = '161f49a44e';
const CACHE = 'a02-' + VERSION;
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './fx.js',
  './garden.js',
  './games.js',
  './games2.js',
  './fill.js',
  './unit.js',
  './words.js',
  './content.js',
  './strokes.js',
  './audio-manifest.js',
  './manifest.webmanifest',
  './vendor/hanzi-writer.min.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('a02-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => {
      const refresh = fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => hit);
      return hit || refresh;
    })
  );
});
