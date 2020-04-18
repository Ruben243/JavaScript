//Funcion

let aprendiendo;

aprendiendo = function () {
    console.log('Prueba con funcion');

}
aprendiendo();



//alternativa con arrow functions

aprendiendo = () => {
    console.log('Prueba sin funcion');

}
aprendiendo();


//En una linea no requere llave

aprendiendo = () => console.log('Una sola linea sin llave');

aprendiendo();


aprendiendo = () => 'directamente sin log ni parentesis en la funcion.Log aparte';

console.log(aprendiendo());

//retorna un objeto
aprendiendo = () => ({ aprendiendo: 'retorna un objeto ' });
console.log(aprendiendo());

//pasar parametros
aprendiendo = (tecnologia) => console.log(`aprendiendo 1 ${tecnologia}`);
console.log(aprendiendo('Javascript'));

//con un aramtro te ahorras un parenteis
aprendiendo = tecnologia => console.log(`aprendiendo ${tecnologia}`);
aprendiendo('ES6');


const productos = ['Disco', 'Camisa', 'Guitara'];
//devuelve el numero de etras de cadapalabra callback
/*const letrasProducto=productos.map(function (producto) {
    return producto.length;

});
console.log(letrasProducto);

const producto = ['Disco', 'Camisa', 'Guitara'];
//devuelve el numero de etras de cada palabra callback arrow functions un solalina y 1paramtro
const letrasProductos=producto.map(producto=>producto.length);

console.log(letrasProductos);
*/

//se comenta paraque no de problemas 

//devuelve los valores de producto.1 pareamtro
productos.forEach(producto => console.log(producto));

//lo mismo peroen varias lineas.
productos.forEach(producto=>{
    console.log(producto);
    
})

