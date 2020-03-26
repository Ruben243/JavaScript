

let elemento;
elemento = document; //retorna todo el html
elemento = document.all; //regresa todo pero en un HTMLAllColeccion
elemento = document.all[10]; //seleccion del elemento 10 del  HTMLAllColeccion
elemento = document.head;  //retorna solo la parte del head
elemento = document.body;  //retorna solo el body
elemento = document.domain; //retorna la url donde estamos
elemento = document.URL;   //retorna el puerto la url actual y el protocolo
elemento = document.characterSet; //retorna la codificacion del documento,en este caso UTF-8
elemento = document.forms //retorna los formularios
elemento = document.forms[0]; //retorna el primer formulario presente en la pagina
elemento = document.forms[0].id //retorna el id del formaulario selccionado
elemento = document.forms[0].className //retorna la clases de formulario seleccionado en una sola cadena de texto
elemento = document.forms[0].classList //retorna la clase del formulario como un DOMTokenList
elemento = document.forms[0].classList[0] //retorna la clase en la posicion seleccionada
elemento = document.images;  //retorna la cantidad de imagenes en tu documento en forma de HTMLAllColeccion
elemento = document.images[2];  //retorna la imagen seleccionada
elemento = document.images[2].src  //retona el src de la imagen seleccionada
elemento = document.images[2].getAttribute('src') //retorna la url de la imagen selecionada
elemento = document.scripts //regresa el numero de scripts que tienes en tu documento

//console.log(elemento);

//************************************************************************************************************** */

//convertir un HTMLAllColeccion en un array
elemento = document.images;

let imagenes = document.images;//asignamos el resultado HTMLAllColeccion a una variable
let imagenesArr = Array.from(imagenes);//convertimos esa variable HTMLAllColeccion con Array.from  a un array

imagenesArr.forEach(function (imagenes) {//mostramos la imagenes 1 por 1 con un forEach
    console.log(imagenes);
});
