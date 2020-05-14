//Herencia de Prototipes

function PlayList(nombre) {
    this.nombre = nombre;
}

PlayList.prototype.play = function () {
    console.log(`Reproduciendo la playlist ${this.nombre}`);

}

PlayList.prototype.eliminar = function () {
    console.log(`Eliminando la playlist ${this.nombre}`);

}


//Herencia
function Cancion(nombre, genero) {
    PlayList.call(this, nombre);
    this.genero = genero;
}
//Heredar los metodos
Cancion.prototype = Object.create(PlayList.prototype);


const cancion = new Cancion('Nothing Else Matters', 'Heavy Metal');
cancion.play();
