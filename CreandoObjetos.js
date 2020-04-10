//object literal

//forma anterior a EMACScript6
/*
const cliente = {
    nombre: 'Ruben',
    saldo: 200,
    tipoCliente: function () {
        let tipo;

        if (this.saldo > 1000) {
            tipo = 'Gold';
        } else if (this.saldo > 500) {
            tipo = 'Platinum'
        } else {
            tipo = 'Normal';
        }
        return tipo;
    }
}

console.log(cliente.tipoCliente());
*/


//forma moderna en EMACScript 6

//constructor objeto cliente
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo
    this.tipoCliente = function () {
        if (this.saldo > 1000) {
            tipo = 'Platinum';
        } else {
            tipo = 'Normal';
        }
        return tipo;

    }
}


const persona = new Cliente('Ruben', 2000);  //creando un nueva instancia de objeto Cliente

console.log(persona);
console.log(persona.tipoCliente()); //valor especifico




