//Symbols no son iguales entre si,son difrentes

let nombre = Symbol();
let apellido = Symbol();

//crear persona
let persona = {}
persona.nombre = 'Ruben';
persona[nombre] = 'Juan';//para añadir el valor al Symbol se ponen corchetes
persona[apellido] = 'Lopez'
persona.saldo = 100;
persona.tipoCliente = 'Normal';

//para introducir un nombre a un objeto se pone cochetes,para acceder a su valor tambien
console.log(persona.nombre);//imprime ruben
console.log(persona[nombre]);//imprime juan



//los Symbol no son iterados de esta manera
for (let i in persona) {
    console.log(`${i} : ${persona[i]}`);

}