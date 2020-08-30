const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);

})

function buscarClima(e) {
    e.preventDefault();

    // validar Formulario
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    // console.log(ciudad);
    // console.log(pais);

    if (ciudad === '' || pais === '') {
        // hubo un error
        mostrarError('Ambos campos son obligatorios');

        return;
    }


    // consultar la api
    consultarApi(ciudad, pais);
}




function mostrarError(mensaje) {
    const alerta = document.querySelector('.bg-red-100');

    if (!alerta) {
        // crear alerta
        const alerta = document.createElement('div');

        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md'
            , 'mx-auto', 'mt-6', 'text-center');

        alerta.innerHTML = `
    <strong class="font-bold">ATENCION:</strong>
    <span class"block">${mensaje}</span>`;

        container.appendChild(alerta);

        // se elimina la alerta despues de 5 segundos
        setTimeout(() => {
            alerta.remove();
        }, 5000);
    }

}


function consultarApi(ciudad, pais) {

    const appid = 'ad88899b7066ee55389804100abbe0d8'

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appid}`;

    Spinner();

    fetch(url).then(respuesta => respuesta.json())
        .then(datos => {
            limpiarHTML();
            if (datos.cod === '400') {
                mostrarError('Ciudad no encontrada');
                return;
            }

            // imprime la respuesta html
            mostrarClima(datos);
        })
}


function mostrarClima(datos) {
    const { name, main: { temp, temp_max, temp_min } } = datos;

    const centigrados = kelvinCentigrados(temp);
    const tempMax = kelvinCentigrados(temp_max);
    const tempMin = kelvinCentigrados(temp_min);
    const imagen = document.createElement('img');
    imagen.src = "../imagen/tiempo.png";
    imagen.classList.add('img');

    const nombreCiudad = document.createElement('p');
    nombreCiudad.textContent = `Clima en ${name}`;
    nombreCiudad.classList.add('font-bold', 'text-2xl');



    const actual = document.createElement('p');
    actual.innerHTML = `Temperatura Actual: ${centigrados} &#8451`;
    actual.classList.add('font-bold', 'text-xl');

    const temperaturaMax = document.createElement('p');
    temperaturaMax.innerHTML = `Temperatura Maxima: ${tempMax} &#8451`;
    temperaturaMax.classList.add('text-xl');

    const temperaturaMin = document.createElement('p');
    temperaturaMin.innerHTML = `Temperatura Minima: ${tempMax} &#8451`;
    temperaturaMin.classList.add('text-xl');



    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('px-4')
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(temperaturaMax);
    resultadoDiv.appendChild(temperaturaMin);
    resultado.appendChild(imagen);
    resultado.classList.add('card');
    resultado.appendChild(resultadoDiv);

}


const kelvinCentigrados = grados => parseInt(grados - 273.15);


function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function Spinner() {
    limpiarHTML();
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');

    divSpinner.innerHTML == `
        <div class="sk-circle1 sk-child"></div>
        <div class="sk-circle2 sk-child"></div>
        <div class="sk-circle3 sk-child"></div>
        <div class="sk-circle4 sk-child"></div>
        <div class="sk-circle5 sk-child"></div>
        <div class="sk-circle6 sk-child"></div>
        <div class="sk-circle7 sk-child"></div>
        <div class="sk-circle8 sk-child"></div>
        <div class="sk-circle9 sk-child"></div>
        <div class="sk-circle10 sk-child"></div>
        <div class="sk-circle11 sk-child"></div>
        <div class="sk-circle12 sk-child"></div>  `;
    
    
    resultado.appendChild(divSpinner);

}