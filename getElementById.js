//getElementById
let elemento;

elemento = document.getElementById('encabezado').id; //.id para el id .class para la clase o innerText para el texto del
                                                     // elemento o nada si luego vas a cambia el estilo

elemento.style.background = '#333';//cambia el fondo del elemento seleccionado
elemento.style.color = '#fff';//cambia el color del texto
elemento.style.padding = '20px';//cambia el padding

//cambia el texto
elemento.textContent = 'Los mejores cursos';//cambia el texto escrito en el elemento selecionado



console.log(elemento);