
// Recibe un array el id,usa reduce y spread operator para crear el objeto,retorna el objeto
const convertoArrayToObject = (array, key) => array.reduce((objetos, valor) => {
    const { [key]: id, ...datos } = valor;
    objetos[id] = datos;
    return objetos;
}, {})

// 
const hero = convertoArrayToObject([
    { id: 1, nombre: 'Thor', poder: 'Martillo' },
    { id: 2, nombre: 'Iron-Man', poder: 'Dinero y ser cool' },
    { id: 3, nombre: 'Wanda', poder: 'Os revienta a todos' },
], 'id')


console.log('Array Objeto completo', hero); //{'1': { nombre: 'Thor', poder: 'Martillo' },'2': {
                                         //  nombre: 'Iron-Man', poder: 'Dinero y ser cool' },'3': 
                                        //  { nombre: 'Wanda', poder: 'Os revienta a todos' } }

const { '1': { nombre }, '2': { poder }, '3':wanda } = hero;//Destructuring assignment
console.log(nombre);//thor
console.log(poder);//Dinero y ser cool
console.log(wanda.nombre);//Wanda
