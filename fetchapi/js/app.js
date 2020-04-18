document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);

document.getElementById('apiBTN').addEventListener('click', cargarREST);
/**
 * Funcion que lee nombres de un archivo txt
 */
function cargarTXT() {
    fetch('datos.txt')//archivo donde estan los datos a cargar
        .then(function (res) {//en este den obtiene los datos y le dices como devolverlos
            return res.text();//.text()devuelve el resultado con texto plano

        })
        .then(function (data) {//en este den tienes lo datos verdaderamente
           // console.log(data);//aqui ya se ven los datos en la consola
            document.getElementById('resultado').innerHTML = data;//el nombre puede ser el que quieras,en vez de data otro cualquiera


        }).catch(function (error) {
            console.log(error);//muestra un error si algo sale mal

        })
}

/**
 * Funcion que lee un json
 */
function cargarJSON() {
    fetch('empleados.json').then(function (res) {

        return res.json();//.json devuelve los resultados en formato json

    }).then(function (resultado) {
        let html = '';
        resultado.forEach(function (persona) {
            html += `
            <li>${persona.nombre} ${persona.puesto}</li>`;
        });
        document.getElementById('resultado').innerHTML = html;

    }).catch(function (error) {
        console.log(error);//muestra un error si algo sale mal

    });
}
/**
 * Funcion que trae 998 fotos de una API
 */
function cargarREST() {
    fetch('http://picsum.photos/list').then(function (res) {
        return res.json();//convierte los datos en json

    }).then(function (imagenes) {
        let html = '';
        //bucle que recorre las imagenes y los inserta en un <li>
        //con un < a > link a la imagen y muestra el autor al lado
        imagenes.forEach(function (imagen) {
            html += `
            <li>
            <a target="_blank" href="${imagen.post_url}">ver imagen</a>
            ${imagen.author}
            
            </li>`;
        });
        document.getElementById('resultado').innerHTML = html;
    }).catch(function (error) {
        console.log(error);//muestra un error si algo sale mal

    });
}