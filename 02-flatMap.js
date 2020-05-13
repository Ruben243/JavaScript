const productos = [
    { nombre: 'Producto 1', precio: 20 },
    { nombre: 'Producto 2', precio: 30 },
    { nombre: 'Producto 3', precio: 40 }
];


const resultado = productos.flatMap(producto => [producto.nombre, producto.precio]);

console.log(resultado);//flatMap junta los campos de los array que eliges y los retorna en un nuevo array





