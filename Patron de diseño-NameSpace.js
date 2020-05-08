//NameSpace forma de evitar colisiones con nombre.Crea un objeto global para agregar todas las funciones y metodos en un mismo lugar

const restaurApp = {};

//platos que ofrecen
restaurApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25,

    },

    {
        platillo: 'Hamburguesa',
        precio: 20,

    },

    {
        platillo: 'HotDog',
        precio: 15,

    },



];


//funciones
restaurApp.funciones = {
    ordenar: id => {
        console.log(`Tu plato: ${restaurApp.platillos[id].platillo} se esta preparando`);

    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        }
        restaurApp.platillos.push(nuevo);
    },
    mostrarMenu: platillos => {
        console.log(`Bienvenido a nuestro menu: `);
        platillos.forEach((platillo, index) => {
            console.log(`${index}: ${platillo.platillo} ${platillo.precio} `);

        });
    }

}


const { platillos } = restaurApp;
restaurApp.funciones.mostrarMenu(platillos);
restaurApp.funciones.ordenar(2);

restaurApp.funciones.agregarPlatillo('Pastel', 10);

restaurApp.funciones.mostrarMenu(platillos);
