const edades = [8, 10, 9, 11, [13, 18, 20, [18, 20, 21]]];

console.log(edades.flat(2));//.flat() coje el numero de arrays que le pases y los como uno.
console.log(edades.flat(Infinity));//con el parametro infinity coje todos los arrays.


