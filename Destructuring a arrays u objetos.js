//Destructuring a array u Objetos

const ciudades = ['Londres', 'Gijon', 'Paris'];
//usamos cochetes en arrays
const [primeraCiudad, segundaCiudad] = ciudades;

//para sacar un resultado en concreto dejas los espacios en blanco entre las comas
const [, , Paris] = ciudades;


console.log(Paris);


console.log(primeraCiudad);
console.log(segundaCiudad);

const cliente = {
    tipo: 'Premium',
    saldo: 3000,
    datos: {
        nombre: 'pedro',
        apellido: 'Perez',
        residencia: {
            ciudad: 'Mexico'
        }
    },
    movimientos: ['12-03-2018', '12-04-2019', '12-06-2020']
}

let {
    tipo,
    datos,//todos losdatos
    datos: { residencia }//solo la residencia  
    ,
    movimientos:[uno,dos,tres]
} = cliente;

console.log(tipo);//accede a tipo premiun
console.log(residencia);//accede a la residencia
console.log(datos);//accede a nombre,apellido,residencia,ciudad
console.log(uno);//acedee al primer movimiento



