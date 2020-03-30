//Event listener click al buscador


/*Con una funcion que se ejecuta en el momento*/
document.querySelector('#submit-buscador').addEventListener('click', function (e) {
    Event.preventDefault();//previene la accion por defecto para que haga nuestra funcion
    alert('buscando cursos');
});


//forma con ua  funcion que se ejecuta al hacer click
document.querySelector('#submit-buscador').addEventListener('click',ejecutarBoton);

function ejecutarBoton(e) {
    e.preventDefault();//previene la accion por defecto para que haga nuestra funcion
    console.log('desde la funcion');
    
    let elemento;
    elemento = e;//retorna la informacion completa del event
    elemento = e.target;//nos retorna el elemento donde hicimis click

    console.log(elemento);
    
}



document.querySelector('#encabezado').addEventListener('click',function(e) {
    
    e.target.innerText = 'nuevo encabezado';//al hacer click en el encabezado cambia su texto
    
});

//variables
const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelectorAll('.enlace');
const boton = document.querySelector('#vaciar-carrito');

//detecta cuando se hace un solo click 
boton.addEventListener('click', obtenerEvento);

//detecta cuando se hace doble click
boton.addEventListener('dblclick', obtenerEvento);

//detecta cuando el raron entra mouseenter
boton.addEventListener('mouseenter', obtenerEvento);

//detecta cuando el raton sale mouseleave
document.addEventListener('mouseleave', obtenerEvento);

//detecta cuando el mouse se mueve a un elemento o a uno de sus elementos secundarios
document.addEventListener('mouseover', obtenerEvento);

//mouseout detecta cuando el mouse se va de un elemento o a uno de sus elementos secundarios 

document.addEventListener('mouseout', obtenerEvento);

//mousedown activa cuando el mouse es presionado en un elemento.
document.addEventListener('mousedown', obtenerEvento);

//mouseup cuando se sueltael mouse  mientras el puntero se encuentra dentro del elemento
document.addEventListener('mouseup', obtenerEvento);

//mousemove se mueve el mouse  mientras el punto de acceso del cursor está dentro del  elemento.
encabezado.addEventListener('mousemove', obtenerEvento);


/**
 * 
 * @param {*} e captura el tipo de envento y lo muestra por consola
 */
function obtenerEvento(e) {
    console.log(`Evento: ${e.type}`);
    
    
}


