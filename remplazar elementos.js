//remplazar elementos

let nuevoEncabezado = document.createElement('h2');

nuevoEncabezado.id = 'encabezado';

nuevoEncabezado.appendChild(document.createTextNode('Los mejores cursos'));
//elemento anteriro remplazdo

let anterior = document.querySelector('#encabezado');//elemento que va a ser remplazado
let elPadre = document.querySelector('#lista-cursos');//elemento padre de referencia

elPadre.replaceChild(nuevoEncabezado, anterior);//remplazar


console.log(nuevoEncabezado);

