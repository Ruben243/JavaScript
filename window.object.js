//variables
let altura, anchura;

//les asignamos los metodos de window outerHeight y 
//outerWidth para saber la anchura y altura de la ventana
altura = window.outerHeight;
anchura = window.outerWidth;

console.log(altura + " x " + anchura);


//los metodos innerHeight e innerWidth solo tienen en cuenta la parte 'web',si abres por ejemplo la consola
//el espacio se reduce
altura = window.innerHeight
anchura = window.innerWidth;

console.log(altura + " x " + anchura);


let ubucaciones;
ubucaciones = window.location;
console.log(ubucaciones);

//window.location.href se usa para redireccionar
//window.location.href = 'http://twitter.com'

let lenguaje;
//window.navigator.languag devuelve el lenguaje en el que esta el usuario
lenguaje = window.navigator.language;
console.log(lenguaje);

//window.location.search se usa para saber la busqueda que esta realizando el usuario
let busqueda = window.location.search;
console.log(busqueda);
