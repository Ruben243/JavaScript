//asignacion por Destructuring
//Forma antigua
/*
const cliente = {
    nombre: 'Alejandra',
    tipo: 'Premium'
}

let nombre = cliente.nombre;
tipo = cliente.tipo;

console.log(nombre);
console.log(tipo);

///forma nueva
const cliente = {
    nombre: 'Alejandra',
    tipo: 'Premium'
}

let { nombre, tipo } = cliente;//le pasamos el objeto o array para asignarle el valor a las variables.

console.log(nombre);
console.log(tipo);


const cliente = {
    tipo: 'Premium',
    nombre: 'Alejandra',
    datos: {
        ubicacion: {
            ciudad: 'Jalisco',
            pais: 'Mexico'
        },
        cuenta: {
            desde: '10-12-2012',
            saldo: 4000
        }

    }
}
//forma facil de acceder a un objeto dentro de un objeto
let { datos: { ubicacion } } = cliente;
console.log(ubicacion);
console.log(ubicacion.ciudad);
console.log(ubicacion.pais);

let { datos: { cuenta } } = cliente;
console.log(cuenta);
console.log(cuenta.desde);
console.log(cuenta.saldo);

*/

const cliente = {
    tipo: 'Premium',
    nombre: 'Pedro',

}



//valores poir default
let { nombre, tipo = 'Basico', saldo = 0 } = cliente;
console.log(nombre);

console.log(tipo);

console.log(saldo);







