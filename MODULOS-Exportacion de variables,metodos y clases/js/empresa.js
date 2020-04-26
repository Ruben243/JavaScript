import { Cliente } from './cliente.js';//importacion de la clase CLiente
//exportar variables
export const nombreEmpresa = 'Canonical';
export let ahorro = 2000;
export const categoria = 'Software';

//exportar funciones
export function mostrarInformacion(nombreCliente, ahorro, categoria) {
    return `Cliente: ${this.nombreCliente} - Ahorro: ${this.ahorro}-Categoria: ${this.categoria}`;
}

//Exportacion de la clase empresa extendia de Cliente
export class Empresa extends Cliente {
    constructor(nombre, ahorro, categoria) {
        super(nombre, ahorro);//con super accedes al nombre y ahorro del cliente
        this.categoria = categoria;//categoria de empresa
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}-Categoria: ${this.categoria}`;
    }

}