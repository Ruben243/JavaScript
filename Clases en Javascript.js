
//Clases 
class Cliente {
    //constructor de clase con los parametros
    constructor(nombre, apellido, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;

    }
    //metodo de clase que estara incluido en el proto automaticamente
    imprimirSaldo() {
        return `Hola ${this.nombre},tu saldo es de : ${this.saldo}`;

    }


    tipoCliente() {
        let tipo;
        if (this.saldo > 10000) {
            tipo = 'Gold';
        } else if (this.saldo > 4000) {
            tipo = 'PLatinum';

        } else {
            tipo = 'Normal';
        }
        return tipo;

    }
    //los metodos static no necesitan new.
    static bievenida() {
        return `Bienvenido al cajero`;
    }

}


console.log(Cliente.bievenida());//Solo la clase y el punto y el nombre del metodo

const anna = new Cliente('Anna', 'Simon', 10000);//constructor de clase con parametros que se pasaran al constructor

console.log(anna.imprimirSaldo());//llamada a una instancia de clase con un metodo de la clase
console.log(anna.tipoCliente());

