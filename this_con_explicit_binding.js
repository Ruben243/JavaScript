//this con explicit binding


function persona(el1,el2) {
    console.log(`Hola soy ${this.nombre} y me gusta el ${el1} y el ${el2}`);
    
}
const informacion = {
    nombre: 'Ruben',
    trabajo: 'Programador'
}
const generosMusicales = ['Pop', 'Rock', 'Clasico'];

//explicit biding con call,cuando pasas un array debes colocar todas las posiciones que necesites individualmente
persona.call(informacion, generosMusicales[1],generosMusicales[0]);

//expñicit binding con .apply si puedes mandar el array completo
persona.apply(informacion, generosMusicales);


//explicit binding .bind retorna el resultado y lo asigna a una nueva funcion
const nuevaFn = persona.bind(informacion, generosMusicales[0], generosMusicales[1]);
nuevaFn();
