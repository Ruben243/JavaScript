//variables
const presupuestoUsuario = prompt('¿Cual es tu presupuesto semanal?');
const formulario = document.getElementById('agregar-gasto');
let cantidadPresupuesto;//global con el presupuesto total accesible en todo el programa




//clases
//clase de presupuesto

class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuestoUsuario);//viene como String lo pasamos a numero
        this.restante = Number(presupuesto);//viene como String lo pasamos a numero

    }
    //metodo para ir restando del presupuesto actual
    presupuestoRestante(cantidad = 0) {
        return this.restante -= Number(cantidad);
    }

}


//clase de interfaz,maneja todo lo relacionado con el html
class Interfaz {
    //metodo inserta los datos en su sitio en web
    insertarPresupuesto(cantidad) {
        const presupuestoSpan = document.querySelector('span#total');//asignamos el elemento a la variable
        const restanteSpan = document.querySelector('span#restante');//asignamos el elemento a la variable


        //insertar al html
        presupuestoSpan.innerHTML = `${cantidad}`;//inserta datos en el span
        restanteSpan.innerHTML = `${cantidad}`;//inserta datos en el span

    }

    //imprime el mensaje 
    imprimirMensaje(mensaje, tipo) {

        const divMensaje = document.createElement('div');//creamos el div que contiene el mensaje
        divMensaje.classList.add('text-center', 'alert');//le añadimos las clases css pertenecientes a bootstrap
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');//si hay error le añadimos la clase alert-ddanger de bootstrap

        } else {
            divMensaje.classList.add('alert-success');//no hay error le añadimos la clase alert-success de bootstrap

        }

        divMensaje.appendChild(document.createTextNode(mensaje));
        //Insertar en elm DOM
        document.querySelector('.primario').insertBefore(divMensaje, formulario);
        //elimina el mensaje de error a los 3 segundos
        setTimeout(function () {
            document.querySelector('.primario .alert').remove();
            formulario.reset();//resetea el formulario
        }, 3000);
    }



    //Inserta los gastos de la lista
    agregarGastoListado(nombre, cantidad) {
        const gastosListado = document.querySelector('#gastos ul');//asignamos el elemento html a la variable

        //crear un li para agregar los gastos
        const li = document.createElement('li');//creamos el li
        li.classList = 'list-group-item d-flex justify-content-between aling-items-center';//añadimos las clases
        //insertar gasto en el li
        li.innerHTML = `${nombre} 
                    <span class="badge badge-primary badge-pill"> $ ${cantidad} </span>`;
        //Insertar al html
        gastosListado.appendChild(li);//añadir el li a la web
    }
    //Comprueba el presupuesto restante
    presupuestoRestante(cantidad) {
        const restante = document.querySelector('span#restante');
        //leer el presupuesto restante
        const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad);


        restante.innerHTML = `${presupuestoRestanteUsuario}`;
        this.comprobarPresupuesto();//comprueba el presupuesto
    }

    //cambia de color presupuesto restante
    comprobarPresupuesto() {
        const presupuestoTotal = cantidadPresupuesto.presupuesto;
        const presupuestoRestante = cantidadPresupuesto.restante;
        const control = 0;

        //comprueba si te quedaste sin dinero
        if (presupuestoRestante <= control) {

            const insertto = document.querySelector('.restante alert alert-success');
            const divMensaje = document.createElement('div');//creamos el div que contiene el mensaje
            divMensaje.classList.add('text-center', 'alert');//le añadimos las clases css pertenecientes a bootstrap
            divMensaje.classList.add('alert-danger');//si hay error le añadimos la clase alert-ddanger de bootstrap
            divMensaje.classList.add('borra');//clase añadida por mi para borrar el mensaje
            divMensaje.appendChild(document.createTextNode('SIN FONDOS'));
            //Insertar en elm DOM
            document.querySelector('.contenido-secundario').insertBefore(divMensaje, insertto);
            setTimeout(function () {
                document.querySelector('.contenido-secundario .borra').remove();

            }, 3000);

            //comprbar el 25% del gasto
        } else if ((presupuestoTotal / 4) > presupuestoRestante) {

            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success', 'alert-warning');//borra las clases
            restante.classList.add('alert-danger');//inserta una clase


            //calcular el 50%
        } else if ((presupuestoTotal / 2) > presupuestoRestante) {
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success');//borra la clase
            restante.classList.add('alert-warning');//inserta otra

        }


    }

}



//Even listeners
document.addEventListener('DOMContentLoaded', function () {
    if (presupuestoUsuario === null || presupuestoUsuario === '') {
        window.location.reload();//si no se rellena el alert se recarga hasta que se rellene
    } else {
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);//instancia de la clase Presupuesto


        const ui = new Interfaz(); //instanciar la clase de Interfaz
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);//ui llama al metodo insertarPresupuesto

    }
})

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    //leer del formualrio de gastos
    const nombreGasto = document.querySelector('#gasto').value;
    const cantidadGasto = document.querySelector('#cantidad').value;


    const ui = new Interfaz(); //Instanciar la interfaz



    if (nombreGasto === '' || cantidadGasto === '') {//Comprobar que los campos no estan vacios

        ui.imprimirMensaje('Hubo un error', 'error');//2 parametros: mensaje y tipo

    } else {
        //insertar en el html 
        ui.imprimirMensaje('Correcto', 'correcto');//Muestra el mensaje 'Correcto'
        ui.agregarGastoListado(nombreGasto, cantidadGasto);//ui llama al metodo agregarGasto
        ui.presupuestoRestante(cantidadGasto);//ui llama al metodo presupuestoRestante
    }
});
