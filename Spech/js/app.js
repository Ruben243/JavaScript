const boton = document.querySelector('#boton');

boton.addEventListener("click", () => {
    const mensaje = document.querySelector('#mensajeText').value
    const Speech = new SpeechSynthesisUtterance(mensaje);
    Speech.volume = 1;
    Speech.rate = 1;
    Speech.picht = 1;
    speechSynthesis.speak(Speech);
})
