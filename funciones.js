//declarar funciones(Funcion declaracion)

//funcion con string como parametro
function saludas(nombre) {
    console.log(`Hola ${nombre}`);
}
//distintas llamadas a la funcion
saludas('Ruben');
saludas('Manolo');
saludas('Lola');

//funcion sumar  recibe dos enteros como parametro
function sumar(a, b) {
    console.log(a + b);
}

sumar(4, 5);//llamada a la funcion

function multiplicar(a, b) {
    return a * b;
}

let result;

result = multiplicar(5, 3);
console.log(result);

//forma antigua de valores por defecto
function saludo(nombre) {
    if (typeof nombre === 'undefined') {
        { nombre = 'Usuario' };
        return `Hola ${nombre}`;
    }
}
console.log(saludo());

//forma moderna
function saludos(nombre = 'Usuario') {
    return `Hola ${nombre}`;
}
console.log(saludos());

//Funcion expresion
const suma = function (a = 0, b = 0) {
    return a + b;
}

console.log(suma(2, 3));



