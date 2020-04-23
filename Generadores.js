//generadores funcion que retorna un iterador se indica con un * despues de funcion
/*
function* crearGenerador() {
    //yield
    yield 1;
    yield 'nombre';
    yield 3 + 3;
    yield true;
}


const iterador = crearGenerador();//para acceder a los valores se usa obligatoriamente .netx().value
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);//al llegar al final del generador imprimira undefined
*/
function* nuevoGenerador(carrito) {
    for (let i = 0; i < carrito.length; i++) {
        yield carrito[i];

    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Prodcuto 4'];

//recorremos el iterador
let iterador = nuevoGenerador(carrito);
console.log(iterador.next().value);//accedemos al valor de carrito
console.log(iterador.next().value);//accedemos al valor de carrito
console.log(iterador.next().value);//accedemos al valor de carrito
console.log(iterador.next().value);//accedemos al valor de carrito
console.log(iterador.next().done);//retorna true o false si estamos al final o no del array
console.log(iterador.next().done);//retorna true o false si estamos al final o no del array