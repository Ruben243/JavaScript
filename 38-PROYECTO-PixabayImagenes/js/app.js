const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const paginacionDiv = document.querySelector('#paginacion');
const registrosPorPagina = 20;
let totalPaginas;
let iterador;
let paginaActual = 1;

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}



function validarFormulario(e) {
    e.preventDefault();
    const terminoBusqueda = document.querySelector('#termino').value;

    if (terminoBusqueda === '') {
        mostrarAlerta('agrega un termino de busqueda');
        return;
    }
    buscarImagenes();
}

function mostrarAlerta(mensaje) {

    const existeAlerta = document.querySelector('.bg-red-100');

    if (!existeAlerta) {
        const alerta = document.createElement('p');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded',
            'max-w-lg', 'mx-auto', 'mt-6', 'text-center');

        alerta.innerHTML = `
    <strong class="font-bold">ATENCION:</strong>
    <span class="block sm:inline">${mensaje}</span>`;

        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);


    }

}

async function buscarImagenes() {
    const termino = document.querySelector('#termino').value;
    const key = '';
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${registrosPorPagina}&page=${paginaActual}`;


    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        totalPaginas = calcularPaginas(resultado.totalHits)
        mostrarImagenes(resultado.hits);

    } catch (error) {
        mostrarAlerta("Algo fue mal,intentelo mas tarde o busque otro termino");
    }
}

// generador que va a registrar la cantidad de elementos de acuerdo a las paginas
function* crearPaginador(total) {
    for (let i = 1; i <= total; i++) {
        yield i; // yield registra los valores en el generador
    }
}

function impirmirIterador() {
    iterador = crearPaginador(totalPaginas);

    while (true) {
        const { value, done } = iterador.next();
        if (done) return;  //si acaba return

        // Caso contrario genera un boton por cada elemento del generador
        const boton = document.createElement('a');
        boton.href = '#';
        boton.dataset.pagina = value;
        boton.textContent = value;
        boton.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'font-bold', 'mb-1', 'rounded');

        boton.onclick = () => {
            paginaActual = value;

            buscarImagenes()


        }
        mostrarPaginaActual(paginaActual);
        paginacionDiv.appendChild(boton);

    }
}


function mostrarPaginaActual(pagina) {
    const mostrarPagina = document.querySelector('#paginaActual');
    while (mostrarPagina.firstChild) {
        mostrarPagina.removeChild(mostrarPagina.firstChild);
    }
    const num = document.createElement('a');
    num.href = '#';
    num.textContent = pagina;
    num.classList.add('bg-yellow-400', 'border-black-400', 'px-2', 'm-1', 'font-bold', 'rounded', 'h-2',);
    const pagAct = document.createElement('p');
    pagAct.innerHTML = `La pagina actual es:`;
    pagAct.appendChild(num);
    mostrarPagina.classList.add('bg-gray-100', 'border-black-400', 'text-black-700', 'rounded', 'mx-auto',
        'text-center', 'm-2', 'max-w-lg');
    mostrarPagina.appendChild(pagAct);
}


function calcularPaginas(total) {
    return parseInt(Math.ceil(total / registrosPorPagina));
}



function mostrarImagenes(imagenes) {
    console.log(imagenes);
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);

    }

    if (imagenes.length===0) {
        mostrarAlerta('NO SE HAN ENCONTRADO RESULTADOS');
    }

    // iterar sobre el arreglo de imagenes y construir el html
    // target="_blank" abre el link en una nueva ventana
    // rel="noopener noreferrer" confiere seguridad a _blank
    imagenes.forEach(imagen => {
        const { previewURL, likes, views, largeImageURL } = imagen;
        resultado.innerHTML += `
        <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
            <div class="bg-white">
                <img class="w-full" src="${previewURL}">
                <div class="p-4">
                    <p class="font-bold">${likes}<span class="font-light"> Me Gusta</span></p>
                    <p class="font-bold">${views}<span class="font-light"> Vistas</span></p>

                    <a 
                     class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
                     href="${largeImageURL}" target="_blank" rel="noopener noreferrer">Ver Imagen
                    </a>

                </div>
             </div>
        </div>`;
    })

    // limpiar el iterador previo
    while (paginacionDiv.firstChild) {
        paginacionDiv.removeChild(paginacionDiv.firstChild);
    }
    // generador nuevo
    impirmirIterador();


}
