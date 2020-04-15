//forma nueva de trabajar con AJAX
/*
document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos() {
    //crear el objetos xmlhttprequest
    const xhr = new XMLHttpRequest();
    //abrir una conexion
    xhr.open('GET', 'datos.txt', true);
    //una vez que carga 
    xhr.onload = function () {
        //200 correcto || 403 prphibido || 404 no encontrado

        if (this.status === 200) {

            document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }
    //enviar el request
    xhr.send();

}
*/

//forma antigua de trabajar con AJAX
document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos() {
    //crear el objetos xmlhttprequest
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'datos.txt', true);

    xhr.onreadystatechange=function () {
        /**
         * ready status
         * 0-No inicializado
         * 1-Conexion establecida
         * 2-Recibido
         * 3-Procesando
         * 4-Respuesta lista
         */
        console.log(`Estado ${this.readyState}`);//muestra los distintos estados anteriores
        
        if (this.readyState===4 && this.status===200) {
            //console.log(this.responseText);
            
        }
    }



    //enviar el request
    xhr.send();
}