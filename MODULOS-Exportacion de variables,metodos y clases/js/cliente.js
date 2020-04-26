//exportar variables
export const nombreCliente = 'Ruben';
export let ahorro = 200;

//exportar funciones
export function mostrarInformacion(nombreCliente, ahorro) {
    return `Cliente: ${this.nombreCliente} - Ahorro: ${this.ahorro}`;
}

//exportar clases
export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }
    //no hace falta poner export por que se exporta con la clase
     mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro ${this.ahorro}`;
    }

}