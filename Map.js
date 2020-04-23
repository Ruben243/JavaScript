//Maps guardan los datos como clave y valor

let cliente = new Map();

cliente.set('nombre', 'Anna');
cliente.set('Apellido', 'Simon');
cliente.set('saldo', 4000);
console.log(cliente);


//acceder a valores
console.log(cliente.get('nombre'));
console.log(cliente.get('Apellido'));
console.log(cliente.get('saldo'));

///metodos para los maps

console.log(cliente.size);//tamaño

console.log(cliente.has('nombre'));//comprobar si existe una propiedad


//borrar un elemento del map
cliente.delete('saldo');
console.log(cliente);

//borrar todo su contenido
cliente.clear();
console.log(cliente);

//Map con paramtros por defecto
const paciente = new Map([
    ['nombre', 'paciente'],
    ['habitacion', 'no definido']
]);
paciente.set('Nombre', 'antonio');
paciente.set('habitacion', 400);

//recorer el Map
paciente.forEach((datos, index) => {
    console.log(`${index}: ${datos}`);

});






