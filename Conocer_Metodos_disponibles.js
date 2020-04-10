//Conocer metodos disponibles en el proto

const nombre1 = new String('Ruben');


console.log(nombre1);//en la consola en la seccion desplegable
//__proto__puedes ver todos los metodos aplicables a este 


const numero = new Number(20);

console.log(numero);


const boolean = new Boolean(true);

console.log(boolean);


//Funciones
const funcion = function (a, b) {
    return a + b;
}

const function2 = new Function('a', 'b', 'return a+b');//Forma alternativa

console.log(funcion(5,6));
console.log(function2(5,6));

const persona = {
    nombre: 'Ruben'

}

const persona2 = new Object({ nombre: 'ruben' });

console.log(persona);

console.log(persona2);


//Arrays
const array1 = [1, 2, 3, 4, 5];
const array2 = new Array(1, 2, 3, 4, 5);

console.log(array1);
console.log(array2);



