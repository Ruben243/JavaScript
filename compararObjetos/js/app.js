const boton = document.querySelector('#boton');

boton.addEventListener('click', compararObjetos);

function compararObjetos() {
    const fechaInput1 = document.querySelector('#primeraFecha').value
    const fechaInput2 = document.querySelector('#segundaFecha').value

    console.log(fechaInput2);
    if (fechaInput2 == "" || fechaInput1 == "") {
        mostrarMensaje("Los campos son obligatorios", "error");
        return;
    }

    if (fechaInput1 === fechaInput2) {
        mostrarMensaje('Las fechas son iguales', 'ok')
        return;
    }

    mostrarMensaje('Las Fechas son difrentes', 'error');
}

function mostrarMensaje(mensaje, estilo) {
    const resultado = document.querySelector('#resultado');
    resultado.textContent = mensaje;

    if (resultado.classList.contains('error')) {
        console.log(12);
        resultado.classList.remove('error');

    }else if (resultado.classList.contains('ok')) {
        console.log(2);
        resultado.classList.remove('ok');
    }

    resultado.classList.add(estilo);

}