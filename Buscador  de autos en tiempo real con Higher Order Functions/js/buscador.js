/**
 * Parte que solamente rellena los datos en el input de años
 */
const years = document.createElement('option');
const max = new Date().getFullYear();
let min = max - 10;

for (let i = max; i > min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}
//fin 




/**
 * Funcion que retorna el objeto de automoviles
 */
function obtenerAutos() {
    return [
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2012,
            precio: 30000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2016,
            precio: 70000,
            puertas: 4,
            color: 'Rojo',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2015,
            precio: 25000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Camaro',
            year: 2018,
            precio: 60000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2017,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2012,
            precio: 25000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 45000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2019,
            precio: 90000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2015,
            precio: 35000,
            puertas: 2,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2018,
            precio: 50000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2017,
            precio: 80000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
    ]


}

/**
 * Objeto con las categorias de busqueda disponibles que se ira rellenando segun se seleccionen
 * filtros
 */
let datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''


};




/**
 * Controla cuando se selecciona una marca de automoviles y llama al la funcion que los filtra
 * @see filtrarAuto
 */
const marca = document.querySelector('#marca');
marca.addEventListener('input', e => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});


/**
 * Controla cuando se selecciona un año de automoviles y llama al la funcion que los filtra
 * @see filtrarAuto
 */
const year = document.querySelector('#year');
year.addEventListener('input', e => {
    datosBusqueda.year = Number(e.target.value);

    filtrarAuto();
});


/**
 * Controla cuando se selecciona un precio minimo del automovil  y llama al la funcion que los filtra
 * @see filtrarAuto
 */
const minimo = document.querySelector('#minimo');
minimo.addEventListener('input', e => {
    datosBusqueda.minimo = Number(e.target.value);

    filtrarAuto();
});


/**
 * Controla cuando se selecciona un precio maximo del automovil y llama al la funcion que los filtra
 * @see filtrarAuto
 */
const maximo = document.querySelector('#maximo');
maximo.addEventListener('input', e => {
    datosBusqueda.maximo = Number(e.target.value);

    filtrarAuto();
});


/**
 * Controla cuando se selecciona un numero de puerta  del automovil y llama al la funcion que los filtra
 * @see filtrarAuto
 */
const puertas = document.querySelector('#puertas');
puertas.addEventListener('input', e => {
    datosBusqueda.puertas = Number(e.target.value);

    filtrarAuto();


});

/**
 * Controla cuando se selecciona un tipo de transmision del automovil y llama al la funcion que los filtra
 * @see filtrarAuto
 */
const transmision = document.querySelector('#transmision');
transmision.addEventListener('input', e => {
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();


});


/**
 * Controla cuando se selecciona un color del automovil  y llama al la funcion que los filtra
 * @see filtrarAuto
 */
const color = document.querySelector('#color');
color.addEventListener('input', e => {
    datosBusqueda.color = e.target.value;

    filtrarAuto();


});


/**
 * Funcion que limpia el html con los resultados previos existentes
 * 
 */
function limpiarHtml() {
    const contenedor = document.querySelector('#resultado');
    //limpiar los resultados existentes
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }


}


/**
 * Funcion que limpia los resultados existentes lee los datos y construye el html
 *  y los inserta en la app 
 * @param {Object} autos objeto recibido por parametro con los datos necesarios
 */
function mostarAutos(autos) {

    limpiarHtml(); //limpiar los resultados previo existentes

    autos.forEach(auto => {

        const contenedor = document.querySelector('#resultado');//leer resultados

        limpiarHtml()//limpiar los resultados previo existentes

        //creacion del HTML
        autos.forEach(auto => {
            const autoHTML = document.createElement('p');
            autoHTML.innerHTML = `
            <p>
            -Marcas:${auto.modelo} 
            -Modelo: ${auto.modelo}
            -Año: ${auto.year} 
            -Puertas: - ${auto.puertas}
            -Transmision:${auto.transmision} 
            -Precio ${auto.precio} 
            - Color: ${auto.color}
             </p>`;

            contenedor.appendChild(autoHTML);//inserto los datos al html

        });
    });
}



/**
 * Funcion que muestra un mensaje de error en caso de no coincidencias con la busqueda
 * @see limpiarHtml
 */
function noResultado() {
    
    limpiarHtml();//limpiar resultados existentes
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode('No hay resultados'));
    document.querySelector('#resultado').appendChild(noResultado);
}


/**
 * Funcion encargada de filtrar por categoria 
 * @see obtenerAutos
 */
function filtrarAuto() {
    //filtros de categorias
    const resultado = obtenerAutos().filter(filtrarMarca).filter(filtrarYear)
        .filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas)
        .filter(filtrarTransmision).filter(filtrarColor);

    if (resultado.length) {
        mostarAutos(resultado);
    } else {
        noResultado();
    }

}


function filtrarMarca(auto) {
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca;
    } else {
        return auto;
    }
}

function filtrarYear(auto) {
    if (datosBusqueda.year) {
        return auto.year === datosBusqueda.year;
    } else {
        return auto;
    }
}

function filtrarMinimo(auto) {
    if (datosBusqueda.minimo) {
        return auto.precio >= datosBusqueda.minimo;
    } else {
        return auto;
    }
}

function filtrarMaximo(auto) {
    if (datosBusqueda.maximo) {
        return auto.precio <= datosBusqueda.maximo;
    } else {
        return auto;
    }
}


function filtrarPuertas(auto) {
    if (datosBusqueda.puertas) {
        return auto.puertas === datosBusqueda.puertas;
    } else {
        return auto;
    }
}

function filtrarTransmision(auto) {
    if (datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision;
    } else {
        return auto;
    }
}

function filtrarColor(auto) {
    if (datosBusqueda.color) {
        return auto.color === datosBusqueda.color;
    } else {
        return auto;
    }
}