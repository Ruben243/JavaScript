document.querySelector('#boton').addEventListener('click', cargarDatos);//listener al hacer click en e boton


function cargarDatos(e) {
    e.preventDefault();//previene el comportamiento por defecto
    const desplegable = document.getElementById('desplegable');//selecciono desplegable por el id
    const paisSeleccionado = desplegable.options[desplegable.selectedIndex].value;//asigno el valorseleccionado

    let url = '';//variable que aojarala url

    url += 'https://randomuser.me/api/?';//introduzc url concatenando

    if (paisSeleccionado !== '') {//si el valor no esta vacio
        url += `nat=${paisSeleccionado}&`;
        url += `results=${13}&`;
    }

    console.log(url);

    const xrh = new XMLHttpRequest();//creo el objeto xmlrquest

    xrh.open('GET', url, true);//abro la conexion con metodo get laurl y de forma asincrona

    //carga y lectua e datos
    xrh.onload = function () {
        if (this.status === 200) {
            empleados = JSON.parse(this.responseText);//convierto eljson en un array
            const datos = empleados.results;//asigno el resultado a una variable
            let html = "<th class='campo'>Nombre</th><th class='campo'>Apellido</th><th class='campo'>pais</th>";//inicializo la variable para elhtml

            console.log(datos); JSON.parse(this.responseText)

            datos.forEach(empleados => {//bucle que recorre los resultadoy los introduce en etiquetas html y contena a la variable
                html += ` 
                <tr class="campo">
                   <td class="campo"> ${empleados.name.first}</td>
                   <td class="campo"> ${empleados.name.last}</td>
                   <td class="campo"> ${empleados.location.country}</td>
                </tr>
                `;
            });
            html += '</table>';
            document.querySelector('#tabla').innerHTML = html;//inyeccion al html


        }

    }


    xrh.send();//mandamoselrequest
}