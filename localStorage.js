//localStorage

localStorage.setItem('nombre', 'Ruben');//añadir o modificar elemento existente.No se borra al cerra el navegador


//sesionStorage

sessionStorage.setItem('nombre', 'Ruben');//añadir elementos a sesionStorage.Se borra al cerrar el navegador


//eliminar de localStorage

localStorage.removeItem('nombre');//borra el elemento con la key que pasas como parametro.

localStorage.setItem('nombre', 'Marbelys');//añadir elemento modificar un elemento existente

const nombre = localStorage.getItem('nombre',);//recoge el elemento con la key pasada por parametro

console.log(nombre);


localStorage.clear();//borra todo el local storage