//Instanciamos la Interfaz
const ui = new UI();

//EventListener que controla cuando la pagina esta cargada
document.addEventListener('DOMContentLoaded', () => {
    ui.mostrarEstablecimientos();//llamamos al metodo que muestra los establecimientos
});

//EventListener al input para recoger lo que escribas
const buscador = document.querySelector('#buscar input');
buscador.addEventListener('input', () => {
    //Solo busca cuando escribes mas de 4 letras
    if (buscador.value.length > 4) {
        //LLama al metodo que va a obtener todos los resultados
        ui.obtenerSugerencias(buscador.value);
    } else {
        //vuelve a mostrar todos los establecimientos si borras la busqueda
        ui.mostrarEstablecimientos();
    }


});