//foreach

const pendientes = ['comer', 'beber', 'dormir', 'programar'];

pendientes.forEach(function (pendientes) {
    console.log(`tarea pendiente ${pendientes}`);

});


//Map para recorer un array de objetos

//array de productos
const carrito = [
    { id: 1, producto: 'libro' },
    { id: 2, producto: 'disco' },
    { id: 3, producto: 'guitarra' },
    { id: 4, producto: 'portaril' },

];

//creamos el map
const nombreProducto = carrito.map(function (carrito) {
    return carrito.producto;
});

console.log(nombreProducto);//mostramos los resultados


//for para mostrar objetos


//obejeto coche
const coche = {
    modelo: 'camaro',
    motor: 6.1,
    year: 1969,
    marca: 'chebrolet'

}

//for para mostrar obejto
for (let index in coche) {
    console.log(`${coche}:${coche[index]}`);//${coche} es el obejto que queremos mostrar y
                                            //${ coche[index]} es la informacion del objeto a ala que accedemos
}


