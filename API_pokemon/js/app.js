const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
 ui.listarPokemon();
});

const boton = document.querySelector('.boton');
boton.addEventListener('click', () => {
    ui.filtrarPokemon()

})
