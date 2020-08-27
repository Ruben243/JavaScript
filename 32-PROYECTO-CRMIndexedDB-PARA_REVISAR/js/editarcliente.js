(function () {
    let DB;
    let idCliente;
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const formulario = document.querySelector('#formulario')
    document.addEventListener('DOMContentLoaded', () => {

        conectarDB();


        // actualiza el registro
        formulario.addEventListener('submit', actualizarCliente);

        // verificar el id de la url
        const parametrosUrl = new URLSearchParams(window.location.search);

         idCliente = parametrosUrl.get('id');

        if (idCliente) {
            setTimeout(() => {
                obtenerCliente(idCliente);
            }, 100);



        }

    });


    function conectarDB() {
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function () {
            console.log('Hubo un error');
        };

        abrirConexion.onsuccess = function () {
            DB = abrirConexion.result;

        }
    }

    function obtenerCliente(id) {
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');

        const cliente = objectStore.openCursor();
        cliente.onsuccess = function (e) {
            const cursor = e.target.result;

            if (cursor) {
                if (cursor.value.id === Number(id)) {
                    llenarFormulario(cursor.value);

                }

                cursor.continue();
            }
        }



    }

    function llenarFormulario(datosCliente) {
        const { nombre, empresa, email, telefono } = datosCliente;
        nombreInput.value = nombre;
        empresaInput.value = empresa;
        emailInput.value = email;
        telefonoInput.value = telefono;

    }


function actualizarCliente(e) {
    e.preventDefault();

    if (nombreInput.value==='' || empresaInput.value==='' || telefonoInput.value==='' || emailInput.value==='' ) {
        imprimirAlerta('Todos los campos son obligatorios','error');
        return;
    }
    const clienteActulizado={
        nombre:nombreInput.value,
        email:emailInput.value,
        telefono:telefonoInput.value,
        empresa:empresaInput.value,
        id: Number (idCliente)
    };

    const transaction=DB.transaction(['crm'],'readwrite');
    const objectStore = transaction.objectStore('crm');
    objectStore.put(clienteActulizado);

    transaction.oncomplete=function(){
        imprimirAlerta('Cliente editado correctamente');
        setTimeout(()=>{
            window.location.href='index.html';
        },2000)
    };

    transaction.onerror=function(){
        imprimirAlerta('No se a actualizado','error');
    }
}

})();