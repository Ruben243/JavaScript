//Esta son la forma normal de usar los metodos en javaScript
let elemento = document.getElementById('encabezado');
console.log(elemento);

elemento = document.querySelector('h1');
console.log(elemento);

elemento = document.querySelectorAll('.enlace');
console.log(elemento);

//y esta es la forma alternativa creado tus propios metodos
console.log('ALTERNATIVAS');

//creando constantes y asignandoles los metodos seguidos de .bind(document)
//para definir el scope y no falle
const id = document.getElementById.bind(document);
const query = document.querySelector.bind(document);
const qAll = document.querySelectorAll.bind(document);

//luego somos libres de usarlas pasandole los parametros necesarios
elemento = id('encabezado');
console.log(elemento);
elemento = query('h1');
console.log(elemento);
elemento = qAll('.enlace');
console.log(elemento);


