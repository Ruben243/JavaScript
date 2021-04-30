const h1 = document.querySelector('.click');

h1.addEventListener('click', function() {
    Notification.requestPermission().then(resultado => console.log(resultado));
});

if (Notification.permission == 'granted') {
    new Notification('esta es mi primera nitificacion de prueba', {
        icon: '../img/rechazado.png',
        body: 'Notificacion de prueba'
    })
}