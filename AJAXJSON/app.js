const boton = document.getElementById('boton1');//asigmano el id conrrespondiente a una constante

boton.addEventListener('click', function () {//añado un event listener que ejecuta una funcion al click
    const xhr = new XMLHttpRequest();//creo objeto xmlhttprequest la norma dice que se llama xhr

    xhr.open('GET', 'empleado.json', true);//abro una conexion con el tipo,el archivo y true dice que se a asincrono
    //cuando se carga la consulta
    xhr.onload = function () {
        if (this.status === 200) {//chequeo el estado
            //200:correcto || 403:prohibido || 404:no encontrado
            const persona = JSON.parse(this.responseText);//asigno el resultdo a una constante
            //guardo el resultado en un template con las etiquetas html para visualizarlo bien en la web
            const htmlTemplate = `
            <ul>

                <li>ID: ${persona.id}</li>
                <li>Nombre: ${persona.nombre}</li>
                <li>Empresa: ${persona.empresa}</li>
                <li>Trabajo: ${persona.trabajo}</li>
            </ul>`;
            document.getElementById('empleado').innerHTML = htmlTemplate;//lo cargo al html
        }
    }

    xhr.send();//se envia el request
});


const boton2 = document.getElementById('boton2');
boton2.addEventListener('click', function () {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleados.json', true);
    xhr.onload = function () {
        if (this.status === 200) {
            const personal = JSON.parse(this.responseText);
            let htmlTemplate = '';
            personal.forEach(function (persona) {//al ser un JSON con varios objetos se usa un bucle para recorrerlos

                htmlTemplate += `
                <ul>

                    <li>ID: ${persona.id}</li>
                    <li>Nombre: ${persona.nombre}</li>
                    <li>Empresa: ${persona.empresa}</li>
                    <li>Trabajo: ${persona.trabajo}</li>

                 </ul>`;

            });
            document.getElementById('empleados').innerHTML = htmlTemplate;


        }
    }
    xhr.send();
});