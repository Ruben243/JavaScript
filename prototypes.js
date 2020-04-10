//se crea el constructor de cliente
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

//Crear un prototype (funcion solo disponible para objetos tipo cliente)
Cliente.prototype.tipoCliente = function () {
    let tipo;
    if (this.saldo > 1000) {
        tipo = 'Gold';
    } else if (this.saldo > 500) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}


//Prototipo que imprime saldo y nombre
Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre},Tu saldo es ${this.saldo},Tipo Cliente: ${this.tipoCliente()}`;
}

//Retirar saldo
Cliente.prototype.retirarSaldo = function (retiro) {
    return this.saldo -= retiro;
}



const cliente1 = new Cliente('Ruben', 100);//creacion del nuevo objeto cliente

console.log(cliente1.nombreClienteSaldo());

cliente1.retirarSaldo(20);

console.log(cliente1.nombreClienteSaldo());