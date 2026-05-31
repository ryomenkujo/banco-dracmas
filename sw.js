// Service Worker — Dracmas ADC
const CACHE = 'dracmas-v1';

// Arquivos que ficam em cache para funcionar offline
const STATIC = [
  '/banco-dracmas/',
  '/banco-dracmas/index.html',
  '/banco-dracmas/manifest.json',
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Inter:wght@400;600;700;900&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',
];

// Instala e faz cache dos arquivos estáticos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC)).then(() => self.skipWaiting())
  );
});

// Remove caches antigos quando atualizar
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Estratégia: tenta rede primeiro, cai no cache se offline
self.addEventListener('fetch', e => {
  // Requisições do Firebase vão sempre pela rede (dados em tempo real)
  if (e.request.url.includes('firestore.googleapis.com') ||
      e.request.url.includes('firebase') ||
      e.request.url.includes('googleapis.com/identitytoolkit')) {
    return;
  }

  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Atualiza cache com resposta nova
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
