//variables
const email = document.getElementById('email');//constante elemento asignado campo email
const asunto = document.getElementById('asunto');//constante elemento asignado campo asunto
const mensaje = document.getElementById('mensaje');//constante elemento asignado campo mensaje
const btnEnviar = document.getElementById('enviar');//constante elemento asignado boton enviar
const formularioEnviar = document.getElementById('enviar-mail');//constante elemento el formulario
const resetBtn = document.getElementById('resetBtn');//constante elemento asignado //boton reset




//llamada a los listeners
eventListeners();


/**
 * Funcion que ejecutara los listeners para ejecutar una funcion cuando pase algo
 * @see inicioApp
 * @see validarCampo
 * @see enviarEmail
 * @see resetFormulario
 */
function eventListeners() {
    //inicio d ela aaplicacion y deshabiliatr submit
    document.addEventListener('DOMContentLoaded', inicioApp);//ejecuta la funcion al cargar se la pagina


    //campos del formulario

    email.addEventListener('blur', validarCampo);//al salir del campo email ejecuta la funcion
    asunto.addEventListener('blur', validarCampo);//al salir del campo asunto  ejecuta la funcion
    mensaje.addEventListener('blur', validarCampo);//al salir del campo mensaje ejecuta la funcion

    //boton de enviar submit
    btnEnviar.addEventListener('click', enviarEmail);//ejecuta una funcion al hacer click en el boton enviar

    //formularioEviar.addEventListener('submit', enviarEmail)//forma alternativa para controlar el click en enviar

    resetBtn.addEventListener('click', resetFormulario);//al hacer click en el boton reset ejecuta la funcion
}









//funciones
/**
 * Funcion que se carga al inicio y deshabilita el boton de enviar por defecto
 */
function inicioApp() {
    btnEnviar.disabled = true;//deshabilita el boton de enviar al iniciar la aplicacion

}


/**
 * Funcion que muestra el gif del spinner durante 3 segundo al presionar enviar 
 * crea el elemento que mostrara el gif del envio
 * ocultar spinner y mostrar gif enviado durante 5 segundos
 * y resetea el formulario
 * @param {*} e 
 */
function enviarEmail(e) {
    //muestra el gif del spinner al presionar enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';



    //crea el elemento que mostrara el gif del sobre
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    //ocultar spinner y mostrar gif enviado
    setTimeout(function () {
        spinnerGif.style.display = 'none';//oculta el spinner
        document.querySelector('#loaders').appendChild(enviado);//muestra el gif de enviado

        //borra el gif de enviado
        setTimeout(function () {
            enviado.remove();//borra el gif de enviado
            formularioEnviar.reset();//resetea los campos del email

        }, 5000);//5 segundos

    }, 3000);//tres segundos

    e.preventDefault();

}


/**
 * Funcion que valida la loguitud de los campos del email evitando que se pueda enviar 
 * manteniendo deshabilitado el boton de enviar si no 
 * tienen texto.
 * @see validarEmail
 */
function validarCampo() {

    validarLongitud(this); //se valida la longitud del texto y que no este vacio
    //validad emial solo
    if (this.type === 'email') {
        validarEmail(this);//llama la funcion con el tipo de campo
    }


    let errores = document.querySelectorAll('.error');//constante para la clase error
    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {//condicional para los campos vacios
        if (errores.length === 0) {//chequea que no haya ningun campo vacio
            btnEnviar.disabled = false;//habilita el boton de enviar
        }


    }

}

/**
 * Funcion que resetea el formulario al pulsar el boton reset
 * @param {*} e 
 */
function resetFormulario(e) {
    formularioEnviar.reset();
    e.preventDefault();

}

/**
 * Funcion que cambia el estilo del campo si hay texto escrito o no.Es llamada en la funcion validarCampo
 * @param {String} campo valor recibido por parametro al que se le asigna el valor de la longitud del texto
 * @see validarCampo
 */
function validarLongitud(campo) {
    console.log(campo.value.length);

    if (campo.value.length > 0) {//condicional si la longitud del texto es mayo que 0
        campo.style.borderBottomColor = 'green';//cambia el campo a verde
        campo.classList.remove('error');//borra el error del campo si lo hubiera
    } else {
        campo.style.borderBottomColor = 'red';//campo a rojo
        campo.classList.add('error');//añade la clase error
    }

}


/**
 * Funcion que chequea que el texto del campo email contenga una @  
 * de lo contrario mostrara un error
 * @param {string} campo valor recibido por parametro al que se le asigna el valor de la longitud del texto
 */
function validarEmail(campo) {
    const mensaje = campo.value;
    if (mensaje.indexOf('@') !== -1) {//valida que el texto tenga una arroba
        campo.style.borderBottomColor = 'green';//cambia el campo a verde
        campo.classList.remove('error');//añade la clase error



    } else {
        campo.style.borderBottomColor = 'red';//campo a rojo
        campo.classList.add('error');//añade la clase error

    }
}