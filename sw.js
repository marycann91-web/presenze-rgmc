/* Service worker minimo: serve solo perché il telefono riconosca la pagina
   come applicazione installabile. Non conserva nulla, così l'app è sempre
   quella aggiornata. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* lascio passare tutto alla rete */ });
