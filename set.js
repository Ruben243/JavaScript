//sets lista de valores sin duplicados.

let carrito = new Set();
carrito.add('camisa');
carrito.add('zapatos');
carrito.add('dvd');
carrito.add('camisa');//este no se agrega por estar duplicado

let numero = new Set([1, 2, 3, 4, 5, 6, 67, 3, 2]);
console.log(numero);

console.log(carrito);

console.log(carrito.size);//size te devuelve el numero de elementos

//comprobar que un elemento exita
console.log(carrito.has('camisa'));//devuelve true si existe o false si no

//carrito.delete('zapatos'); //borra el elemento zapatos

console.log(carrito);

//numero.clear();//borra todos los elementos/ console.log(numero);


carrito.forEach((producto, index) => {
    console.log(`${index} : ${producto}`);

});



const arrayCarrito = [...carrito];//convertir un set en un array
console.log(arrayCarrito);
