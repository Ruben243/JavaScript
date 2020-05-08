//Mediator¨intermediario que s ecomunica con dos objetos

//constructor de vendedor recibe un nombre como parametro
const Vendedor = function (nombre) {
    this.nombre;
    this.sala = null;

}

//constructor de comprador recibe un nombre como parametro
const Comprador = function (nombre) {
    this.nombre = nombre;
    this.sala = null;
}

//Prototype de vendedor con dos funciones,oferta y vendido
Vendedor.prototype = {
    //oferta recibe un articulo y un precio
    oferta: function (articulo, precio) {
        console.log(`tenemos el siguiente articulo ${articulo}, iniciamos precio en ${precio}`);

    },
    //vendido recibe un comprador
    vendido: function (comprador) {
        console.log(`vendido a ${comprador} (sonido de mazo)`);


    }
}

//Prototype con una funcion oferta
Comprador.prototype = {
    //oferta recibe un mensaje y un comprador
    oferta: function (mensaje, comprador) {
        console.log(`${comprador.nombre} : ${mensaje}`);

    }
}

//constructor de subasta
const Subasta = function () {
    let compradores = {};//objeto de compradores

    return {
        //funcion que registra un usuario y recibe el usuario por parametro
        registrar: function (usuario) {

            compradores[usuario.nombre] = usuario;
            usuario.sala = this;//la sala que vas a estar
            console.log(compradores);

        }
    }

}
//instanciar las clases de comprador
const juan = new Comprador('juan');
const ruben = new Comprador('Ruben');
const Anna = new Comprador('Anna');

//instancia de subasta
const subasta = new Subasta();
//agregamos a los compradores
subasta.registrar(ruben);
subasta.registrar(juan);
subasta.registrar(Anna);

//instancia de otra subasta
const subasta2 = new Subasta();
//agregamos los nuevios compradores a esta subasta
subasta2.registrar(ruben);
subasta2.registrar(Anna);

//instancia de nuevo vendedor
const vendedor = new Vendedor('Vendedor');
//instancia de una oferta
vendedor.oferta('Mustang 1966', 3000);

//ofertas de compradores
ruben.oferta(3500, ruben);
juan.oferta(4000, juan);
Anna.oferta(5000, Anna);
//vendido a 
vendedor.vendido(Anna.nombre);