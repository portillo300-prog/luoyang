// Offline engine: saves the whole app on first open, then serves it from the device.
// When online, it quietly refreshes the saved copy so new words show up on the next open.
const VERSION = '28eb282e80';
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
  './games3.js',
  './fill.js',
  './unit.js',
  './phrases.js',
  './words.js',
  './content.js',
  './trad.js',
  './strokes.js',
  './audio-manifest.js',
  './audio-own.js',
  './own-voice.js',
  './manifest.webmanifest',
  './vendor/hanzi-writer.min.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './audio/W1-S01.m4a',
  './audio/W1-S02.m4a',
  './audio/W1-S03.m4a',
  './audio/W1-S04.m4a',
  './audio/W1-S05.m4a',
  './audio/W1-S06.m4a',
  './audio/W1-S07.m4a',
  './audio/W1-S08.m4a',
  './audio/W1-S09.m4a',
  './audio/W1-S10.m4a',
  './audio/W1-S11.m4a',
  './audio/W1-S12.m4a',
  './audio/W1-S13.m4a',
  './audio/W1-S14.m4a',
  './audio/W1-S15.m4a',
  './audio/W1-S16.m4a',
  './audio/W1-S17.m4a',
  './audio/W1-S18.m4a',
  './audio/W1-S19.m4a',
  './audio/W1-S20.m4a',
  './audio/W1-S21.m4a',
  './audio/W1-S22.m4a',
  './audio/W1-S23.m4a',
  './audio/W1-S24.m4a',
  './audio/W1-S25.m4a',
  './audio/W1-S26.m4a',
  './audio/W1-S27.m4a',
  './audio/W1-S28.m4a',
  './audio/W1-TITLE.m4a',
  './audio/W2-S01.m4a',
  './audio/W2-S02.m4a',
  './audio/W2-S03.m4a',
  './audio/W2-S04.m4a',
  './audio/W2-S05.m4a',
  './audio/W2-S06.m4a',
  './audio/W2-S07.m4a',
  './audio/W2-S08.m4a',
  './audio/W2-S09.m4a',
  './audio/W2-S10.m4a',
  './audio/W2-S11.m4a',
  './audio/W2-S12.m4a',
  './audio/W2-S13.m4a',
  './audio/W2-S14.m4a',
  './audio/W2-S15.m4a',
  './audio/W2-S16.m4a',
  './audio/W2-S17.m4a',
  './audio/W2-S18.m4a',
  './audio/W2-S19.m4a',
  './audio/W2-TITLE.m4a',
  './audio/W3-S01.m4a',
  './audio/W3-S02.m4a',
  './audio/W3-S03.m4a',
  './audio/W3-S04.m4a',
  './audio/W3-S05.m4a',
  './audio/W3-S06.m4a',
  './audio/W3-S07.m4a',
  './audio/W3-S08.m4a',
  './audio/W3-S09.m4a',
  './audio/W3-S10.m4a',
  './audio/W3-S11.m4a',
  './audio/W3-S12.m4a',
  './audio/W3-S13.m4a',
  './audio/W3-S14.m4a',
  './audio/W3-S15.m4a',
  './audio/W3-S16.m4a',
  './audio/W3-S17.m4a',
  './audio/W3-S18.m4a',
  './audio/W3-S19.m4a',
  './audio/W3-S20.m4a',
  './audio/W3-S21.m4a',
  './audio/W3-S22.m4a',
  './audio/W3-S23.m4a',
  './audio/W3-S24.m4a',
  './audio/W3-S25.m4a',
  './audio/W3-S26.m4a',
  './audio/W3-S27.m4a',
  './audio/W3-S28.m4a',
  './audio/W3-TITLE.m4a'
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
