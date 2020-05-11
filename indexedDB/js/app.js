let DB;//variable global

//selectores de la interfaz
const form = document.querySelector('form'),
    nombreMascota = document.querySelector('#mascota'),
    nombreCliente = document.querySelector('#cliente'),
    telefono = document.querySelector('#telefono'),
    fecha = document.querySelector('#fecha'),
    hora = document.querySelector('#hora'),
    sintomas = document.querySelector('#sintomas'),
    citas = document.querySelector('#citas'),
    headingAdministra = document.querySelector('#administra');


//esperar por el dom ready
document.addEventListener('DOMContentLoaded', () => {

    let crearDB = window.indexedDB.open('citas', 1); //crear la base de datos nombre e inicio

    ///si hay un error enviar la consola
    crearDB.onerror = function () {
        console.log('Hubo un error');

    }

    //Si esta bien entonces muestra una consola y asigna la base de dartos
    crearDB.onsuccess = function () {
        DB = crearDB.result; //asignar la base de datos la variable global

        mostarCitas();  //llamada a la funcion que muestra las citas en la web

    }

    //Este metodo solo se ejecuta una vez y es ideal para crear el schema
    crearDB.onupgradeneeded = function (e) {
        let db = e.target.result; //El evento es la misma based e datos
        //definir el objecstore toma dos parametros el nombre de la base de datos y el segundo  las opciones
        //keyPath es el indice de la base de datos
        let objecStore = db.createObjectStore('citas', { keyPath: 'key', autoIncrement: true });

        //Crear los indices y los campos de la base de datos ,createIndex : 3 parametros nombre,keypath y opciones
        objecStore.createIndex('mascota', 'mascota', { unique: false });
        objecStore.createIndex('cliente', 'cliente', { unique: false });
        objecStore.createIndex('telefono', 'telefono', { unique: false });
        objecStore.createIndex('fecha', 'fecha', { unique: false });
        objecStore.createIndex('hora', 'hora', { unique: false });
        objecStore.createIndex('sintomas', 'sintomas', { unique: false });

        console.log('Base de datos creada y lista');//aviso por consola


    }

    form.addEventListener('submit', agregarDatos);//listener al formulario

    /**
     * Funcion que agrega un nuevo registro
     *  
     */
    function agregarDatos(e) {
        e.preventDefault();
        //objeto para los datos
        const nuevaCita = {
            nombreMascota: nombreMascota.value,
            nombreCliente: nombreCliente.value,
            telefono: telefono.value,
            fecha: fecha.value,
            hora: hora.value,
            sintomas: sintomas.value,
            citas: citas.value
        }

        //en indexDB se utilizan las transacciones
        let transaction = DB.transaction(['citas'], 'readwrite');//nombre de la base de datos y modo de escritura y lectura
        let objectStore = transaction.objectStore('citas');

        let peticion = objectStore.add(nuevaCita);//request a la base da datos pasando el objeto de nuevaCita

        //si la peticion es correcta y resetea el formulario
        peticion.onsuccess = () => {
            form.reset();
        }
        //cuando la transaccion se completa hace una llamada a la funcion que muestra los datos
        transaction.oncomplete = () => {
            console.log('Cita agregada');
            mostarCitas();

        }
        //si la transaccion es erronea
        transaction.onerror = () => {
            console.log('Error');

        }

    }

    /**
     * Funcion que muestra los datos en el html
     */
    function mostarCitas() {
        //limpiar citas anteriores en el html
        while (citas.firstChild) {
            citas.removeChild(citas.firstChild);
        }
        //creamos un objectStore
        let objectStore = DB.transaction('citas').objectStore('citas');

        //esto retorna una peticion
        objectStore.openCursor().onsuccess = function (e) {
            //Cursor se va a ubicar en el registro indicado para obtener los datos
            let cursor = e.target.result;
            //si hay datos 
            if (cursor) {
                let citaHTML = document.createElement('li');//creamos un elemento de lista
                citaHTML.setAttribute('data-cita-id', cursor.value.key);//añadimos el id unico con el valor key de la base de datos
                citaHTML.classList.add('list-group-item');//añadimos la clase de estilo
                //creamos el template con el html
                citaHTML.innerHTML = `
                <p class="font-weight-bold">Mascota:<span class="font-weight-normal">${cursor.value.nombreMascota}</span></p>
                <p class="font-weight-bold">Cliente:<span class="font-weight-normal">${cursor.value.nombreCliente}</span></p>
                <p class="font-weight-bold">Telf:<span class="font-weight-normal">${cursor.value.telefono}</span></p>
                <p class="font-weight-bold">Fecha:<span class="font-weight-normal">${cursor.value.fecha}</span></p>
                <p class="font-weight-bold">Hora:<span class="font-weight-normal">${cursor.value.hora}</span></p>
                <p class="font-weight-bold">Sintomas:<span class="font-weight-normal">${cursor.value.sintomas}</span></p> `;


                const botonBorrar = document.createElement('button');  //creamos el boton boton de borrar
                botonBorrar.classList.add('borrar', 'btn', 'btn-danger');//añadimos las clases
                botonBorrar.innerHTML = '<span aria-hidden="true">x</span> Borrar';
                botonBorrar.onclick = borrarCita;//añadimos que al hacer click se ejecute una funcion
                citaHTML.appendChild(botonBorrar);
                citas.appendChild(citaHTML);
               
                cursor.continue(); //seguir con los proximos registros hasta que se acaben los datos

            } else {
                //cuando no hay registros
                if (!citas.firstChild) {
                    headingAdministra.textContent = 'Agrega citas para comenzar';
                    let listado = document.createElement('p');
                    listado.classList.add('text-center');
                    listado.textContent = 'No hay registros';
                    citas.appendChild(listado);
                } else {
                    headingAdministra.textContent = 'Administra tus citas';

                }

            }

        }
    }

    /**
     * Funcion que borra una cita al hacer click en el boton de borrar
     * 
     */
    function borrarCita(e) {
        let citaID = Number(e.target.parentElement.getAttribute('data-cita-id'));//asignamos el elemento a borrar usando su id

        let transaction = DB.transaction(['citas'], 'readwrite');
        let objectStore = transaction.objectStore('citas');

        let peticion = objectStore.delete(citaID);
        transaction.oncomplete = () => {
            e.target.parentElement.parentElement.removeChild(e.target.parentElement);
          
            if (!citas.firstChild) {
                headingAdministra.textContent = 'Agrega citas para comenzar';
                let listado = document.createElement('p');
                listado.classList.add('text-center');
                listado.textContent = 'No hay registros';
                citas.appendChild(listado);
            } else {
                headingAdministra.textContent = 'Administra tus citas';

            }

        }

    }


});