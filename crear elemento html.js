//crear elementos  html



let enlace = document.createElement('a');

enlace.className = 'enlace'; //agregamos una nuvea clase

enlace.id = 'nuevo-id';//agregar un id

enlace.setAttribute('href', '#');//atributo href

enlace.textContent = 'nuevo enlace';//añadir texto

//enlace.appendChild(document.createTextNode('Nuevo enlace'));//forma alternativa

document.querySelector('#secundaria').appendChild(enlace);//añadirlo al html como hijo

console.log(enlace);
