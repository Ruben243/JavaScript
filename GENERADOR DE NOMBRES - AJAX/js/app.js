document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);


//llamado ajax e imprimir nombres
function cargarNombres(e) {
    e.preventDefault();

    //leer las variables

    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById('numero').value;

    console.log(cantidad);

    let url = '';
    url += 'https://randomuser.me/api/?';

    //Si hay origen agregarlo a la url

    if (origenSeleccionado !== '') {
        url += `nat=${origenSeleccionado}&`;
    }
    //Si hay genero agregarlo a la url

    if (origenSeleccionado !== '') {
        url += `gender=${generoSeleccionado}&`;
    }

    //Si hay cantidad agregarlo a la url

    if (cantidad !== '') {
        url += `results=${cantidad}&`;
    }

    console.log(url);

    //conectar con ajax
    //iniciar XMLHttpRequest()
    const xrh = new XMLHttpRequest();

    //abrimos la conexion
    xrh.open('GET', url, true);

    //datos e impresion del template
    xrh.onload = function () {
        if (this.status === 200) {
            nombres = JSON.parse(this.responseText);
            let htmlNombres = '<h2>Nombres Generados</h2>';
            htmlNombres += '<ul class="lista">';

            //imprimir cada nombre
            const data = nombres.results;
            console.log(data);
            data.forEach(nombres => {
                htmlNombres += `
              <li>${nombres.name.first}</li> 
               `;
            });
            htmlNombres += '</ul>';


            document.querySelector('#resultado').innerHTML = htmlNombres;



        }

    }

    //enviar request
    xrh.send();









}
