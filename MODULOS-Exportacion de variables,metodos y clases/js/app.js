
import *  as clientes from './cliente.js';
import * as empresa from './empresa.js';
import { nombreCliente, ahorro, Cliente } from './cliente.js';//forma alternativa
import { nombreEmpresa, ahorro as ahorroEmpresa, mostrarInformacion as informacionEmpresa, Empresa } from './empresa.js';//importacion con alias



//importacion con alias
console.log('IMPORTACION CON ALIAS');
console.log(empresa.nombreEmpresa);
console.log(empresa.ahorro);


console.log('IMPORTACION CON FORMA ALTERNATIVA');
console.log(nombreCliente);//se muestra el nombre del cliente
console.log(ahorro);//se muestra el ahorro
console.log(nombreEmpresa);
console.log(ahorroEmpresa);


//metodos individuales
console.log('IMPORTACION METODOS INDIVIDUALES');
let prueba = clientes.mostrarInformacion(clientes.nombreCliente, clientes.ahorro);
console.log(prueba);
//o dependiendo de la forma de importacion
console.log(informacionEmpresa);



//trabajando con clases y metodos de clase
console.log('IMPORTACION DE CLASES');
console.log(Cliente);//se muestra la clase
const objeto = new clientes.Cliente(clientes.nombreCliente, clientes.ahorro);
console.log(objeto);
console.log(clientes.mostrarInformacion());

//clase Empresa extendida de Cliente
console.log('CLASE EXTENDIDA DE CLIENTE');

let empresaClase = new Empresa(nombreEmpresa, ahorroEmpresa,empresa.categoria);
console.log(empresaClase.mostrarInformacion());//metodo de clase empresa extendida





