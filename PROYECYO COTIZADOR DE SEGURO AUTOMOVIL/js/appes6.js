//Cotizador seguro con clases

class Seguro {
    /**
     * Construtor de la clase seguro
     */
    constructor(marca, anio, tipo) {
        this.marca = marca;
        this.anio = anio;
        this.tipo = tipo;

    }
    /**
     * Metodo de la clase Seguro que multiplica la base segun el tipo de seguro
     */
    cotizarSeguro() {
        /*
            1 = americano 1.15
            2 = asiatico 1.05
            3 = europeo 1.35
        */
        let cantidad;
        const base = 2000;

        switch (this.marca) {
            case '1':

                cantidad = base * 1.15;
                break;

            case '2':

                cantidad = base * 1.05;
                break;
            case '3':

                cantidad = base * 1.35;
                break;
        }



        /**
     * Leer el año y calcula la difrencia con el año seleccionado
     * en el select y le añade el 30% o el 50% segun el tipo.Luego retorna el valor
     */
        const difrencia = new Date().getFullYear() - this.anio;
        //cada año de difrencia reduce 3% valor del seguro

        cantidad -= ((difrencia * 3) * cantidad) / 100;
        /*
        Si el seguro es basico se multiplica por 30% mas
        si el seguro es completo 50% mas
        
        */
        if (this.tipo === 'basico') {
            cantidad *= 1.30;
        } else {
            cantidad *= 1.50;
        }


        return cantidad;



    }
}


//Clase interfaz
class Intefaz {
    /**
    * Metodo de la clase interfaz recibe el mensaje y el tipo de mensaje de error o exito
    *  y lo añade a web
    * a los tres segundo lo elimina
    */
    mostrarMensaje(mensaje, tipo) {
        const div = document.createElement('div');
        if (tipo === 'error') {
            //mostrar el mensaje de error
            div.classList.add('mensaje', 'error');

        } else {
            //muestra mensaje de correcto
            div.classList.add('mensaje', 'correcto');
        }
        div.innerHTML = `${mensaje}`;
        formulario.insertBefore(div, document.querySelector('.form-group'));
        setTimeout(function () {
            document.querySelector('.mensaje').remove();
        }, 3000)
    }


    /**
    * Metodo de la clase Interfaz  que recibe el tipo del seguro (1,2,3) y
    * asigna un string a la variable marca segun el valor recibido,
    *  y el total de la cotizacion.
    * Añade la informacio a la web,mostrando durante 3 segundos un spinner
    *
    */
    mostarResultado(seguro, total) {
        const resultado = document.getElementById('resultado');
        let marca;
        console.log(seguro);
        switch (seguro.marca) {
            case '1':
                marca = 'Americano'
                break;
            case '2':
                marca = 'Asiatico'
                break;
            case '3':
                marca = 'Europeo'
                break;
        }
        //crear el div
        const div = document.createElement('div');

        //Insertar info
        div.innerHTML = `
   <p class="header"> Tu resumen:</p>
   <p> Marca: ${marca}</p>
   <p> Año: ${seguro.anio}</p>
   <p> Tipo: ${seguro.tipo}</p>
   <p> Total: ${total}</p>`;
        //mostramos el spinner 3 segundos y mostramos la cotizacion
        const spinner = document.querySelector('#cargando img');
        spinner.style.display = 'block';
        setTimeout(function () {
            spinner.style.display = 'none';
            resultado.appendChild(div);
        }, 3000);

    }



}



//Event listener
const formulario = document.getElementById('cotizar-seguro');
formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;
    console.log(marcaSeleccionada);

    //leer año seleccionado
    const anio = document.getElementById('anio');
    const anioSeleccionado = anio.options[anio.selectedIndex].value;
    console.log(anioSeleccionado);

    //Leyendo tipo de seguro
    const tipo = document.querySelector('input[name="tipo"]:checked').value;


    //crear instancia de interfaz
    const interfaz = new Intefaz();


    //revisamos que los campos no esten vacios
    if (marcaSeleccionada === '' || anioSeleccionado === '' || tipo === '') {
        interfaz.mostrarMensaje('Error faltan datos,revisa el formulario y prueba de nuevo', 'error');

    } else {
        //borra los resultados anteriores si existen
        const resultados = document.querySelector('#resultado div');
        if (resultados != null) {
            resultados.remove();
        }




        //instanciar seguro y mostrar interfaz
        const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);


        //Cotizar seguro
        const cantidad = seguro.cotizarSeguro(seguro);
        //mostar el resultado

        interfaz.mostarResultado(seguro, cantidad);
        interfaz.mostrarMensaje('Cotizando.....', 'exito');



    }

});


//rellena el select de los años
const max = new Date().getFullYear();
min = max - 20;

const selectAnios = document.getElementById('anio');

for (let i = max; i > min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}