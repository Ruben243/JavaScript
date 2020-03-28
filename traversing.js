let enlaces = document.querySelectorAll('#principal a:nth-child(odd)');//selecciona enlaces los impares

enlaces.forEach(function (impares){ //funcion que recorre el resultado y cambia los atributos de esos enlaces
    impares.style.background = 'red';//cambia el fondo a rojo
    impares.style.color = 'white';//cambia la letra a blanco
})
console.log(enlaces);


/**************/

//traversing (recorer el html de padre a hijo y viceversa)

let navegacion = document.querySelector('#principal');

console.log(navegacion.children);//children no muestra los espacios del html entre elementos
                                 //childnodes muestra los hijos con text que son los espacios del html

console.log(navegacion.nodeName);//retorna el tipo del elemento en este caso NAV

console.log(navegacion.nodeType);//retorna el numero* del tipo de nodo del elemento


/*1=elementos
  2=atributos
  3=text node
  8=comentarios
  9=documentos
  10=doctype
*/


///////**********/

 enlaces = document.querySelectorAll('.enlace');


console.log(enlaces[0].parentElement);//parentElement selecciona el padre del elemento seleccionado

/******/

//sibiling (elementos a mismo nivel)


let links = document.querySelectorAll('.enlace');


console.log(links[4].previousElementSibling.previousElementSibling);//retorna anterior elemento siempre que este a mismo nivel
console.log(links[0].nextElementSibling);//retorna el siguiente elemento siempre que este al mismo nivel




