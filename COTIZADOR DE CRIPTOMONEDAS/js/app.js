const cotizador = new API('AQUI TU APIKEY');//instancia de API que manda la apikey por parametro
const ui = new Interfaz();//instancia de interfaz


cotizador.obtenerMonedasApi();//objeto API con llamada al metodo para llenar el select




const formulario = document.querySelector('#formulario');//leer el formulario
//even listener
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;//obtener la moneda seleccionada


    const criptomonedaSelect = document.querySelector('#criptomoneda');
    const criptomonedaSeleccionada = criptomonedaSelect.options[criptomonedaSelect.selectedIndex].value; //leer criptomoneda seleccionada



    //comprobar que ambos campos tengan algo seleccionada
    if (monedaSeleccionada === '' || criptomonedaSeleccionada === '') {

        ui.mostrarMensaje('Ambos campos son obligatorios', 'alert bg-danger text-center'); //llamada al metodo para mostrar el mensaje,con el texto y la clase como parametros



    } else {

        //se obtienes los valores mandando la moneda y la criptomoneda seleccionadas por parametro
        cotizador.obtenerValores(monedaSeleccionada, criptomonedaSeleccionada)
            .then(data => {

                //instamcia de interfaz con la llamada aun metodo que mostrara el resultado en el html
                //se manda el resultado de la consulta,la moneda y la criptomoneda como parametros

                ui.mostrarResultado(data.resultado.RAW, monedaSeleccionada, criptomonedaSeleccionada);
            })

    }

})
