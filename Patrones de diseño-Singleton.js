//Singleton funciones relacionadas a un objeto

const alumnos = {
    listaAlumnos: [],
    //obtener alumnos
    get: function (id) {
        return this.listaAlumnos[id];
    },


    //crear un alumno
    crear: function (datos) {
        console.log(datos);
        this.listaAlumnos.push(datos);

    },

    //listado todos los alumnos
    listado: function () {
        return this.listaAlumnos;

    }


}

//definimos un alumno
const infoAlumno = {
    nombre: 'Pablo',
    edad:21
}


//definimos un alumno
const infoAlumno2 = {
    nombre: 'Marbelys',
    edad:43
}

const listado = alumnos.listado();//variable con el listado de alumnos

alumnos.crear(infoAlumno);//pasamos el alumno creado al metodo que los crea
alumnos.crear(infoAlumno2);//pasamos el alumno creado al metodo que los crea

console.log(listado);//muestra todo el listado por consola

const alumno = alumnos.get(0);//retorna el alumno correspondiente a su id

console.log(alumno);//muestra el alumno retornado



