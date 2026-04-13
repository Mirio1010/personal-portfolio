const CACHE_NAME = "pocket-planetarium-v2";
const APP_SHELL = [
  "./",
  "index.html",
  "promo.html",
  "docs.html",
  "src/css/styles.css",
  "src/js/app.js",
  "src/js/audio.js",
  "src/js/elements.js",
  "src/js/lessons.js",
  "src/js/pwa.js",
  "src/js/state.js",
  "manifest.webmanifest",
  "src/data/solar-system.json",
  "src/data/user.json",
  "src/assets/icons/icon.svg",
  "src/assets/images/sun.svg",
  "src/assets/images/earth.svg",
  "src/assets/images/mars.svg",
  "src/assets/images/jupiter.svg",
  "src/assets/images/saturn.svg",
  "src/assets/screenshots/app-home.svg",
  "src/assets/screenshots/app-quiz.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached;
      }
      return fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      });
    })
  );
});
