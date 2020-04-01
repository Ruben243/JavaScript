//Delegation una forma mas sencilla de controlar eventos en el DOM,te ahorra tener un listener para todo

document.body.addEventListener('click', eliminarElemento);//chequea cuando haces click en el body

function eliminarElemento(e) {
    e.preventDefault();//previene el comportamiento por defecto

    console.log('click');
    console.log(e.target.classList);

    if (e.target.classList.contains('borrar-curso')) {//si haces click en un elemento con esa etiqueta ejecuta el if
        console.log(e.target.parentElement.parentElement.remove());

    }
    if (e.target.classList.contains('agregar-carrito')) {
        console.log('Curso agregado');

    }
}


