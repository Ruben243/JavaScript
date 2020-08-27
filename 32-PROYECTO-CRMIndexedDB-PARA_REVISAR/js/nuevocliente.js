(function () {

    let DB;
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();
        formulario.addEventListener('submit', validarCliente);
    })

    async function conectarDB() {
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function () {
            console.log('Hubo un error');
        };

        abrirConexion.onsuccess = await function () {
            DB = abrirConexion.result;


        }

    }

    function validarCliente(e) {
        e.preventDefault();
        //leer todos los inputs
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        if (nombre === '' || email === '' || telefono === '' || empresa === '') {
            imprimirAlerta('Todos los campos son obligatorios', 'error');

            return;

        }
        // crar un objeto con la informacion

        const cliente = {
            nombre,
            email,
            telefono,
            empresa,
            id: Date.now()

        }


        crearNuevoCliente(cliente);

    }

    async function crearNuevoCliente(cliente) {
        const transaction = await DB.transaction(['crm'], 'readwrite');
        const objectStore = await transaction.objectStore('crm');

        objectStore.add(cliente);


        transaction.onerror = function (e) {
            imprimirAlerta('Hubo un error', 'error')
            console.log(e);

        }

        transaction.oncomplete = function () {
            imprimirAlerta('Cliente Agregado correctamente')

            setTimeout(() => {
                window.location.href = 'index.html';

            }, 3000);

        }


    }

})();