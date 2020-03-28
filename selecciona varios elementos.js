//getElementsByClassName

let enlaces = document.getElementsByClassName('enlace');//retorna todos los elementos por la clase especificada
                                                        //document.getElementsByClassName('enlace')[3] accede al numero espeficicado


enlaces[3].style.background = '#333';//se debe selecciona un solo enlace para aplicar el css
enlaces[3].textContent = 'Nuevo enlace';   

console.log(enlaces);

/*************************/
console.log('NUEVO EJEMPLO');

let listaEnlaces = document.querySelector('#principal')//selecciona el elemento con id #principal
    .getElementsByClassName('enlace');/*anadir getElementsByClassName retorna todos los elementos con esa etiqueta
                                       especifica detro de la clase #principal */
console.log(listaEnlaces);

/***********************/
let link = document.getElementsByTagName('a');//retorna todos los enlaces

let linkArray = Array.from(link);//lo convertimos en un array

linkArray.forEach(function (enlace) {
    console.log(enlace.textContent);//muestra el texto de los enlaces
})

