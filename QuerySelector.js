//Query selector

let encabezado = document.querySelector('#encabezado');//selecciona el elemento por el id.Usa la sintaxis de JQuery o css
                                                        //solo regresa un valor

encabezado = document.querySelectorAll('.enlace');//regresa todos los elementos que contengan la etiqueta especificada

encabezado = document.querySelector('.car img');//retorna la imagen dentro de la clase .card

console.log(encabezado);

let elemento;

elemento = document.querySelector('#principal a:firt-child');//retorna el primer hijo
encabezado = document.querySelector('#principal a:last-child');//retorna el ultimo hijo
encabezado = document.querySelector('#principal a:nth-child(3)');//retorna uno de los hijos entre medias

console.log(elemento);

