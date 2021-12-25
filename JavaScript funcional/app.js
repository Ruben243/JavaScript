//FIRST CLASS FUCTIONS
const suma = (a, b) => a + b
const producto = suma;
console.log(producto(5, 5));


//FUNCIONES COMO ARGUMENTOS
const multiplicar = (a, b) => a * b
const sumarOMultiplicar = fn => fn(10, 20)
console.log(sumarOMultiplicar(suma));
console.log(sumarOMultiplicar(multiplicar));


const carrito = [
    { nombre: "Samsung", precio: 1500 },
    { nombre: "xiaomi", precio: 300 },
    { nombre: "Huawei", precio: 400 },
    { nombre: "Iphone", precio: 500 }
]


// Higher - Order Functions
const mayor400 = producto => producto.precio > 400
const productos = carrito.filter(mayor400);
console.log(productos);


const obtenerNombres = producto => producto.nombre;
const pro = carrito.map(obtenerNombres);
console.log(pro);

// Funciones puras
const duplicar = numero => numero * 2;
num1 = 20;
const res = duplicar(num1);
console.log(res);

// funciones que retornan funciones
const obtenerCliente = () => () => console.log("Ruben");
const fn = obtenerCliente();
fn();

// Closures
const obtenerCliente2 = () => {
    const nombre = "Ruben";

    function mostrarNombre() {
        console.log(nombre);
    }
    return mostrarNombre;
}

const nombre = obtenerCliente();

nombre();


// Partials y currying
const sumar = (a, b, c) => a + b + c;
const parcial = a => b => c => sumar(a, b, c);
const resultadoParcial = parcial(5)(5)(5);
console.log(resultadoParcial);

// composition
function Cliente(name, email, work) {
    let info = {
        nombre, email, work
    }
}

function Empleado(name, email, puesto) {
    let info = {
        nombre, email, puesto
    }
}

const cliente2 = Cliente("Ruben", "Correo@correo.com", "Google");
const empleado2 = Empleado("Ruben", "Correo2@correo.com", "developer");
