if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(registrado => console.log('Se instalo correctamente', registrado))
        .catch(error=>console.error('Fallo la instalacion',error) )
} else {
    console.log('ServiceWorkers no soportado');
}