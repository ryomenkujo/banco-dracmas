// Service Worker — Dracmas ADC (com notificações push)
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js');

const CACHE = 'dracmas-v2';
const STATIC = [
  '/banco-dracmas/',
  '/banco-dracmas/index.html',
  '/banco-dracmas/manifest.json',
];

// ── CACHE ──
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(STATIC))
      .then(() => self.skipWaiting())
  );
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', e => {
  if (e.request.url.includes('firestore.googleapis.com') ||
      e.request.url.includes('firebase') ||
      e.request.url.includes('googleapis.com')) return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});

// ── NOTIFICAÇÕES PUSH ──
// Recebe mensagem do app principal via postMessage
self.addEventListener('message', e => {
  if (e.data?.type === 'INIT_PUSH') {
    initPushListener(e.data.uid, e.data.lastSeen);
  }
  if (e.data?.type === 'UPDATE_SEEN') {
    _lastSeen = e.data.lastSeen;
  }
});

let _db = null;
let _uid = null;
let _lastSeen = null;
let _unsubscribe = null;

function getDB() {
  if (_db) return _db;
  firebase.initializeApp({
    apiKey: "AIzaSyA-t2k2EVpfv-xqtQxtq4bt043tOqTtTDw",
    authDomain: "banco-dracmas.firebaseapp.com",
    projectId: "banco-dracmas",
    storageBucket: "banco-dracmas.firebasestorage.app",
    messagingSenderId: "755685605861",
    appId: "1:755685605861:web:651fd974ad8a784af7af0c"
  });
  _db = firebase.firestore();
  return _db;
}

function initPushListener(uid, lastSeen) {
  if (_unsubscribe) _unsubscribe();
  _uid = uid;
  _lastSeen = lastSeen || new Date();

  try {
    const db = getDB();
    const ref = db.collection('notifications')
      .where('to', '==', uid)
      .where('read', '==', false)
      .orderBy('createdAt', 'desc')
      .limit(10);

    _unsubscribe = ref.onSnapshot(snap => {
      snap.docChanges().forEach(change => {
        if (change.type !== 'added') return;
        const data = change.doc.data();
        // só notifica se for nova (depois do lastSeen)
        const ts = data.createdAt?.toDate?.() || new Date();
        if (_lastSeen && ts <= new Date(_lastSeen)) return;
        // não notifica se o app tiver aberto
        self.clients.matchAll({ type: 'window', includeUncontrolled: true })
          .then(clients => {
            const appAberto = clients.some(c => c.visibilityState === 'visible');
            if (!appAberto) {
              self.registration.showNotification('Dracmas ADC', {
                body: data.text || 'Nova notificacao',
                icon: '/banco-dracmas/icon-192.png',
                badge: '/banco-dracmas/icon-192.png',
                tag: change.doc.id,
                data: { url: '/banco-dracmas/' },
                vibrate: [200, 100, 200],
              });
            }
          });
      });
    });
  } catch (e) {
    console.log('Push listener erro:', e);
  }
}

// Abre o app ao clicar na notificação
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(clients => {
        const appAberto = clients.find(c => c.url.includes('banco-dracmas'));
        if (appAberto) return appAberto.focus();
        return self.clients.openWindow('/banco-dracmas/');
      })
  );
});
