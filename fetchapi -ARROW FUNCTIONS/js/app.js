document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);

document.getElementById('apiBTN').addEventListener('click', cargarREST);
/**
 * Funcion que lee nombres de un archivo txt
 */
function cargarTXT() {
    fetch('datos.txt')//archivo donde estan los datos a cargar
        .then(res => res.text())//en este then obtiene los datos y le dices como devolverlos
                                    //.text()devuelve el resultado con texto plano

        .then(data => document.getElementById('resultado').innerHTML = data)//en este den tienes lo datos verdaderamente
        .catch(error => console.log(error)); //muestra un error si algo sale mal                                                   
                                               //el nombre puede ser el que quieras,en vez de data otro cualquiera

}
/**
 * Funcion que lee un json
 */
function cargarJSON() {
    fetch('empleados.json').then((res => res.json())) //.json devuelve los resultados en formato json

        .then(resultado => {
            let html = '';
            resultado.forEach(persona =>
                html += `
            <li>${persona.nombre} ${persona.puesto}</li>`
            );
            document.getElementById('resultado').innerHTML = html;

        }).catch(error => console.log(error));
}

/**
 * Funcion que trae 998 fotos de una API
 */
function cargarREST() {
    fetch('http://picsum.photos/list').then(res => res.json()//convierte los datos en json

    ).then(imagenes => {
        let html = '';
        //bucle que recorre las imagenes y los inserta en un <li>
        //con un < a > link a la imagen y muestra el autor al lado
        imagenes.forEach(imagen =>
            html += `
            <li>
            <a target="_blank" href="${imagen.post_url}">ver imagen</a>
            ${imagen.author}
            
            </li>`
        );
        document.getElementById('resultado').innerHTML = html;

    }).catch(error => console.log(error));
}