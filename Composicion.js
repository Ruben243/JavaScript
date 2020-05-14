//Composicion escribir una serie de funciones y asignarlas al objeto deseado
const obtenerNombre = (info) => ({
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`);

    }
});

const guardarEmail = (info) => ({
    email(email) {
        console.log(`Guardando email de : ${info.nombre}`);
        info.email = email;
    }
})
const obtenerEmail = (info) => ({
    mostrarEmail(email) {
        console.log(`Email : ${info.email}`);
        info.email = email;
    }
});


const obtenerEmpresa = (info) => ({
    mostrarEmpresa(email) {
        console.log(`Empresa : ${info.empresa}`);
    
    }
})


const obtenerPuesto = (info) => ({
    mostrarPuesto() {
        console.log(`Puesto : ${info.puesto}`);

    }
})



function Cliente(nombre, email, empresa) {
    let info = {
        nombre,
        email,
        empresa
    }
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
    )

}


function Empleado(nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto
    }
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    )


}

const cliente = Cliente('Juan',null,'Canonical');
cliente.mostrarNombre();
cliente.email('cliente@cliente.com');
cliente.mostrarEmail();
cliente.mostrarEmpresa();

const empleado = Empleado('Pedro',null,'Programador');
empleado.mostrarNombre();
empleado.email('emplado@empleado.com');
empleado.mostrarEmail();
empleado.mostrarPuesto();

