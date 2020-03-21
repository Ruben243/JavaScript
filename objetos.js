//crear objeto puede ser let o const

const persona = {
    nombre: 'Ruben',
    apellido: 'Fernandez',
    profesion: 'Camionero',
    email: 'correo@correo.com',
    edad: 32,
    musica: ['Trance', 'Rock', 'Grunge'],//array
    hogar: {//objeto dentro de otro objeto
        ciudad: 'Gijon',
        pais: 'España'
    },
    nacimiento: function () {
        return new Date().getFullYear() - this.edad;
    }

};

//formas de acceder
console.log(persona.hogar.ciudad);
console.log(persona['nombre']);
console.log(persona['hogar']['pais']);
console.log(persona.nacimiento());


//Array de objetos
const coches = [
    { modelo: 'Mustang', moton: 6.0 },
    { modelo: 'Camaro', motor: 6.1 },
    { modelo: 'Twingo', motor: 1.2 },
];

//bucle recorriendo el array de objetos
for (let i = 0; i < coches.length; i++) {
    console.log(`${coches[i].modelo} ${coches[i].motor} `);
}

