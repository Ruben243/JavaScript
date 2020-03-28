let enlaces = document.querySelectorAll('.enlace');

let navegacion = document.querySelector('#principal');

//enlaces[0].remove();//eñmina el elemento selecionado

//navegacion.removeChild(enlaces[0]);
//console.log(enlaces);


let primerLi = document.querySelector('.enlace');

let elemento;

elemento = primerLi.className;//obtener una clase css
elemento=primerLi.classList.add('nueva-clase');//añadir clase
elemento = primerLi.classList;//retorna todas las clases en un DOMtokenlist
elemento = primerLi.classList.remove('nueva-clase');//elimina la clase

//leer atributos

elemento = primerLi.getAttribute('href');//retorna el valor atributo del elemento seleccionado
elemento = primerLi.setAttribute('href', 'http://facebook.com');//modifica o añada el atributo segun exista
primerLi.setAttribute('data-id', 20);//alternativa de modificar o añadir atrbuto
elemento = primerLi.hasAttribute('data-id');//verifica que exista un atributo
primerLi.removeAttribute('data-id');//borra un atributo


elemento = primerLi;//igualo la variable para que retorne el valor adecuadamente en el setAttribute
console.log(elemento);
