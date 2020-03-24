const ciudades = ['Londres', 'New York', 'Villaconejos', 'Gijon'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();
datos.set('nombre', 'juan');
datos.set('profesion', 'desarrollador web');

//entries iterador regresa llave y valor
for (let entrada of ciudades.entries()) {
    console.log(entrada);
}

//keys iterator regresa solo las llaves
for (let entrada of datos.keys()) {
    console.log(entrada);
}

//values regresa solo valores
for (let entrada of ciudades.values()) {
    console.log(entrada);
}


//default
for (let entrada of ciudades) {
    console.log(entrada);
}

const mensaje = 'Aprendiendo javascript';
//iterador para String (forma moderna)
for (let letra of mensaje) {
    console.log(letra);
}



const enlaces = document.getElementsByTagName('a');

for (let enlace of enlaces) {
    console.log(enlace);//o enlaces.href para solo los enlaces
}