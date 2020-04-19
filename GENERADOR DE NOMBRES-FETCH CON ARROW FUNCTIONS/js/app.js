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

    //Usando fetch con arrow functions
    fetch(url)
        .then(res => res.json()//devolviendo el resultado como json


        ).then(resultado => {
            const data = resultado.results;//agrego el resultado a una variable para trabajar con ella en el forEach
            let html = '<h2>Nombres generados</h2>';//inicializo la variable html
            html += `<ul class="lista">`;
            //bucle forEach que recorre los resultados
            data.forEach(nombre => {
                html += `<li>${nombre.name.first}</li>`;
            })

            html += `</ul>`;
            document.querySelector('#resultado').innerHTML = html;

        }).catch(error=> console.log(error));












}
