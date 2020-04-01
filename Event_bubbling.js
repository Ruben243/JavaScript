//Event bubbling haces click en un elemento y otros se seleccionan tambien

const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');

card.addEventListener('click', function (e) {
    console.log('click en imagen');
    e.stopPropagation();
})


infoCurso.addEventListener('click', function (e) {
    console.log('click en la info');
    e.stopPropagation();
})


agregarCarrito.addEventListener('click', function (e) {
    console.log('click en agregar');
    e.stopPropagation();//detiene la propagacion entre elementos,si se omitiera se ejecutarian las tres funciones
})