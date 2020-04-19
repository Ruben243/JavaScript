//clase Interfaz que se ocupa de toda la parte visual
class Interfaz {
    constructor() {
        this.init();
    }
    init() {
        this.construirSelect();
    }


    /**
     * MEtodo que se engarga de llenar un desplegable con todas las criptomonedas llemando a un metodo
     * @see obtenerMonedasApi()
     */
    construirSelect() {
        cotizador.obtenerMonedasApi()
            .then(monedas => {
                //crear un select de opciones
                const select = document.querySelector('#criptomoneda');

                //Object.entries se usa para recorrer objetos
                for (const [key, value] of Object.entries(monedas.monedas.Data)) {
                    //añadir el Symbol y el nombre como opciones
                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(opcion);


                }


            })

    }
    /**
     * Metodo que creara un div con nombre de clase clases y texto sera un mensaje de texto
     * @param {String} mensaje variable string recibida por parametro que sera el mensaje que se insertara en el div
     * @param {*} clases sera el nombre de la clase del div
     * @see app.js 27
     */
    mostrarMensaje(mensaje, clases) {
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

        const divMensaje = document.querySelector('.mensajes');//seleccionar clase  mensajes 


        divMensaje.appendChild(div);//mostrar contenido

        //borra el mensaje de error despues de 3 segundo
        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);


    }

    //imprime el resultado de la cotizacion
    /**
     * Metodo que mostrara el resultado de la cotizacion o  
     * borrara el resultado anterior en caso de que exista,y mostrara el nuevo
     * @param {*} resultado resultado de la consulta a la api
     * @param {*} moneda la moneda seleccionada
     * @param {*} cripto la criptomoneda seleccionada
     * @see app.js 40
     */
    mostrarResultado(resultado, moneda, cripto) {
        //borrar el resultado d ela cotizacion anterior si existe
        const resultadoAnterior = document.querySelector('#resultado >div');
        if (resultadoAnterior) {
            resultadoAnterior.remove();

        }
        //contruir el template
        const datosMoneda = resultado[cripto][moneda];
        let precio = datosMoneda.PRICE.toFixed(2);//variable a la que se asigna un recortando deciamles a 2
        let porcentaje = datosMoneda.CHANGEPCTDAY.toFixed(2);//variable a la que se asigna un valor recortando deciamles a 2
        let actualizado = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('ES-es');//convierte la fecha a formato español

        //variable con el string template donde guardaremos los datos en html
        let templateHTML = `
        <div class="card bg-warning">
            <div class"card-body text-light">
                <h2 class="car-title">Resultado </h2>
                <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de:$ ${precio}</p>
                 <p>Variacion del ultimo dia: %${porcentaje}</p>
                 <p>Ultima actualizacion:${actualizado}</p>
            </div>


        </div>
        `;


        this.mostrarOcultarSpinner('block');//muestra el spinner


        setTimeout(() => {
            document.querySelector('#resultado').innerHTML = templateHTML;//insertamos el html con los datos
            this.mostrarOcultarSpinner('none');//oculta el spinner

        }, 3000);

    }
    /**
     * Metodo que ocultara el spinner segun un parametro recibido
     * @param {String} vista parametro recibido block o none que decidira si se muestra u oculta el spinner
     */
    mostrarOcultarSpinner(vista) {
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = vista;
    }


}