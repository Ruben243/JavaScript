//Object Create
const Cliente = {
   imprimirsaldo:function () {
       return `hola ${this.nombre} tu saldo es ${this.saldo} `
    },
    retirarSaldo:function (retiro) {
        return this.saldo -= retiro;
    }
}

//crear el objeto
const mary = Object.create(Cliente);
mary.nombre = 'Mary';
mary.saldo = 1000;




console.log(mary.imprimirsaldo());
