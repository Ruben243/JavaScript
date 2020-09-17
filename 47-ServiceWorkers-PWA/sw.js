const nombreCache = 'apv-v3';
const archivos = [
    '/',
    '/index.html',
    '/error.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js'

];


//cuando se instala el serviceWorker
self.addEventListener('install', e => {
    console.log('Instalado el service Worker');
    e.waitUntil(
        caches.open(nombreCache)
            .then(cache => {
                console.log('cacheando');
                cache.addAll(archivos)
            })
    )
});

// Activar el serviceWorker
self.addEventListener('activate', e => {
    console.log('Service Worker Activado');

    e.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key != nombreCache)
                    .map(key => caches.delete(key)))//borra las versiones anteriores
        })
    )
});

// Evento fetch para descargar archivos estatico
self.addEventListener('fetch', e => {
    console.log('Fetch... ', e);
    e.respondWith(e.request)
        .then(respuestaCache => {
            return respuestaCache
        })
        //no funciona esto,por lo demas va perfecta
        .catch(() => caches.open(nombreCache)).then(() => caches.match('/error.html'))
});
