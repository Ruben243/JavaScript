//this con Implicit binding

const usuario = {
    nombre:'Ruben',
    edad:32,
    presentacion() {
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}`);

    },
    mascota: {
        nombre: 'Hook',
        edad: 1,
        presentacion() {
            console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}`);

        }
    }
}

usuario.presentacion();

usuario.mascota.presentacion();