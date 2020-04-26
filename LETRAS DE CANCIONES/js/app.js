import * as UI from './interfaz.js';//importacion de la clase interfaz
import { API } from './api.js';//importamos la clase API de api.js

//eventListener al formulario
UI.formularioBuscar.addEventListener('submit', (e) => {
    e.preventDefault();//Anulamos el comportamiento por defecto

    //obtener datos del formulario
    const artista = document.getElementById('artista').value,
        cancion = document.getElementById('cancion').value;

    //si los campos estan vacios mostramos un mensaje de error
    if (artista === '' || cancion === '') {
        UI.divMensajes.innerHTML = 'Error...todos los campos son obligatorios';//texto del error
        UI.divMensajes.classList.add('error');//clase error para el css

        //a los 3 segundos quita el mensaje de error
        setTimeout(() => {
            UI.divMensajes.innerHTML = '';//vaciamos el mensaje
            UI.divMensajes.classList.remove('error');//y quitamos la clase error

        }, 3000);

    } else {
        //el formulario esta completo se realiza la consulta a la api
        const api = new API(artista, cancion);//instanciamos la clase API
        api.consultarAPi()
            .then(data => {
                //si la cancion existe la mostramos
                if (data.respuesta.lyrics) {
                    const letra = data.respuesta.lyrics;//asignamos la letra a una variable
                    UI.divResultado.textContent = letra;//y añadimos los resultados al html

                } else {
                    //Si la cancion no existe mostramos un mensaje de error
                    UI.divMensajes.innerHTML = 'La cancion no existe..prueba con otra busqueda';
                    UI.divMensajes.classList.add('error');
                    UI.divResultado.textContent = '';//vaciamos el div de la letra por si existe previamente
                    //quitamos el mensaje a los 3 segundos
                    setTimeout(() => {
                        UI.divMensajes.innerHTML = '';
                        UI.divMensajes.classList.remove('error');
                        UI.formularioBuscar.reset();//reseteamos el formulario para otra busqueda

                    }, 3000);



                }

            });

    }

})