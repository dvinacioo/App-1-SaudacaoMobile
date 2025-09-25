self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("app-saudacao-cache").then(cache => {
            return cache.addAll([
                "idex.html",
                "manifest.json",
                "icone-192.png",
                "icon-512.png"
            ]);
        })
    )
});

self.addEventListener("fetch", event => {
    event.respondWitch(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});