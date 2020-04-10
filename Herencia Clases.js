
//Clases herencia

class Cliente {
    //constructor de clase con los parametros
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;

    }
    //metodo de clase que estara incluido en el proto automaticamente
    imprimirSaldo() {
        return `Hola ${this.nombre},tu saldo es de : ${this.saldo}`;

    }
    //los metodos static no necesitan new.
    static bievenida() {
        return `Bienvenido al cajero`;
    }

}

//Esta clase hereda de Ciente con extends
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, tipo) {
        //constructor padre
        super(nombre, saldo);
        //propios de la clase
        this.telefono = telefono;
        this.tipo = tipo;


    }
    //metodo static copiado y reescrito de cliente
    static bievenida() {
        return `Bienvenido al cajero para empresas`;
    }


}

const empresa = new Empresa('Empresa1', 1000, 8474837, 'Contruccion');

console.log(Empresa.bievenida());

console.log(empresa);
console.log(empresa.imprimirSaldo());//uso de metodo heredado de cliente

