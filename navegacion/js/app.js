document.addEventListener('DOMContentLoaded', señal);


function señal() {
    const link = document.querySelectorAll('.link');//Seleccionamos los enlaces
    let paginaActual = window.location.pathname;   //Obtenemos la url del archivo
    link.forEach(a => {                           //Recorremos el array de elementos
        if (a.pathname == paginaActual) {        //Comparando el atributo del enlace con la pagina actual
            a.classList.add('active');          //Añadimos la clase css para el señalar donde estamos
        }
    });
}