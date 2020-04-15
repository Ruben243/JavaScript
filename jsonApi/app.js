

const cargarPosts = document.querySelector('#cargar');//asignar a una constante el elemento con el id cargar

cargarPosts.addEventListener('click', cargarApi);//añadir un event listener al hacer click

//funcion que se ejecutara al hacer click
function cargarApi() {
    const xhr = new XMLHttpRequest();//instanciacion de un objeto XMLHttpRequest

  
    //Abrir conexion metodo GET a la url de la api de jsonplaceholder true lo marca como asincrono
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
   
    //carga y leer datos
    xhr.onload = function () {
        if (this.status === 200) {
            const respuesta = JSON.parse(this.responseText);//lo convertimos en un array
            let contenido = '';
            respuesta.forEach(function (post) {//blucle forech para recorrer los datos
                //resultado contatenado a la variable contenido
                contenido += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>         
                `;
            });
            document.getElementById('listado').innerHTML = contenido;//inserta al html
        }
    }
    //enviar la conexion
    xhr.send();


}