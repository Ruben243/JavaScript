//IIFE(funciones que se declaran y se usan inmediatamente)

(function (tecno) {//parametro de funcion 
    console.log(`Aprendiendo ${tecno}`);//mostramos paramtro
})('Javascript');//parametro que mandamos




//metodos de propiedad(funcion dentro de un objetos)

const musica = {
    reproducir: function (id) {
        console.log(`Reproduciendo cancion ${id}`);

    }
    pausar: function () {
        console.log('Pausa la musica');
    }
}
//los metodos tambien pueden guardarse fuera del objeto
musica.borrar = function (id) {
    console.log(`Borrando la cancion con el ID ${id}`);
}

musica.reproducir(30);
musica.pausar();
musica.borrar(2);